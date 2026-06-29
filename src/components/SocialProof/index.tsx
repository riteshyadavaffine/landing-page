const stats = [
  { value: '12,000+', label: 'People on waitlist' },
  { value: '4.9/5', label: 'User rating' },
  { value: '40%', label: 'Faster planning' },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Engineering Manager',
    quote: 'TaskFlow AI made sprint planning much faster for our team.',
  },
  {
    name: 'Marcus Rivera',
    role: 'CTO',
    quote: 'Simple to use and easy to adopt for the whole company.',
  },
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900">
          Social Proof
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-gray-200 p-4 text-center">
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-lg border border-gray-200 p-5">
              <p className="text-gray-700">"{item.quote}"</p>
              <p className="mt-3 text-sm font-medium text-gray-900">{item.name}</p>
              <p className="text-xs text-gray-500">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
