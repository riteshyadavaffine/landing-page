const features = [
  {
    title: 'Smart planning',
    description: 'Auto-prioritize tasks based on deadlines and team capacity.',
  },
  {
    title: 'Team collaboration',
    description: 'Keep updates, comments, and progress in one shared workspace.',
  },
  {
    title: 'Simple reports',
    description: 'Generate clear progress summaries for your team and stakeholders.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
          Features
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
