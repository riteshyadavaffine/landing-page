import Hero from './components/Hero';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import EmailCapture from './components/EmailCapture';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Hero />
      <Features />
      <SocialProof />
      <EmailCapture />
      <Footer />
    </div>
  );
}

export default App;
