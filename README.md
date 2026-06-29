# TaskFlow AI Landing Page

A minimal, responsive landing page with lead capture built using React, TypeScript, Vite, and Tailwind CSS. The form submits leads to a serverless API route and includes client + server-side validation.

Live demo: https://landing-page-black-phi-93.vercel.app/

## Features

- Hero section with headline, supporting text, and CTA button
- Features section with 3 benefit cards
- Social proof section with stats and testimonials
- Email capture form (`name` + `email`) with:
  - required field validation
  - loading state
  - success state
  - error state
- Serverless API route at `api/capture.ts` for lead validation and handling

## Tech Stack

- React 19
- TypeScript 6
- Vite 8
- Tailwind CSS 4 (via `@tailwindcss/postcss`)
- Vercel Serverless Functions (`@vercel/node`)

## Project Structure

- `src/App.tsx` - page composition
- `src/components/Hero/index.tsx` - hero section
- `src/components/Features/index.tsx` - features cards
- `src/components/SocialProof/index.tsx` - stats and testimonials
- `src/components/EmailCapture/index.tsx` - lead form and submit states
- `src/components/Footer/index.tsx` - footer
- `api/capture.ts` - Vercel API route for lead capture
- `vite.config.ts` - Vite config and local dev API middleware for `/api/capture`

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Scripts

- `npm run dev` - start Vite dev server
- `npm run build` - TypeScript build + Vite production build
- `npm run lint` - run ESLint
- `npm run preview` - preview production output

## API Details

### Endpoint

- `POST /api/capture`

### Request body

```json
{
  "name": "Jane Smith",
  "email": "jane@company.com"
}
```

### Success response

```json
{
  "success": true,
  "message": "Lead captured successfully."
}
```

### Validation rules

- `name` must be a non-empty string
- `email` must match valid email format

## Notes

- In production (Vercel), `api/capture.ts` handles lead submissions.
- For local Vite-only development, `vite.config.ts` includes a middleware fallback for `/api/capture`.
- Optional Resend integration is scaffolded in `api/capture.ts` comments.

## Deployment

This app is deployed on Vercel:

- https://landing-page-black-phi-93.vercel.app/

For fresh deploys:

1. Push repo to GitHub
2. Import project in Vercel
3. Build command: `npm run build`
4. Output directory: `dist`
