export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-indigo-950/90 backdrop-blur-md border-b border-indigo-800/40">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <span className="text-indigo-400 text-2xl">⚡</span>
          <span>TaskFlow <span className="text-indigo-400">AI</span></span>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-indigo-300">
          <button onClick={() => scrollTo('features')} className="hover:text-white transition">Features</button>
          <button onClick={() => scrollTo('social-proof')} className="hover:text-white transition">Reviews</button>
          <button onClick={() => scrollTo('email-capture')} className="hover:text-white transition">Pricing</button>
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo('email-capture')}
          className="bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-semibold px-5 py-2 rounded-lg transition"
        >
          Get Early Access
        </button>
      </div>
    </nav>
  );
}

