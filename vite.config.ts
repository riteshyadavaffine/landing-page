import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'local-capture-api',
      configureServer(server) {
        server.middlewares.use('/api/capture', (req, res) => {
          if (req.method !== 'POST') {
            res.statusCode = 405
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ message: 'Method Not Allowed' }))
            return
          }

          let rawBody = ''
          req.on('data', (chunk) => {
            rawBody += chunk
          })

          req.on('end', () => {
            try {
              const payload = JSON.parse(rawBody || '{}') as { name?: string; email?: string }
              const name = payload.name?.trim() ?? ''
              const email = payload.email?.trim() ?? ''

              if (!name) {
                res.statusCode = 400
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ message: 'Name is required.' }))
                return
              }

              if (!isValidEmail(email)) {
                res.statusCode = 400
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ message: 'A valid email address is required.' }))
                return
              }

              console.log('[Local Lead Capture]', {
                name,
                email,
                timestamp: new Date().toISOString(),
              })

              res.statusCode = 200
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ success: true, local: true }))
            } catch {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ message: 'Invalid JSON payload.' }))
            }
          })

          req.on('error', () => {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ message: 'Request read error.' }))
          })
        })
      },
    },
  ],
})
