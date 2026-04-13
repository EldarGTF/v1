import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const categories = ['Windows', 'Balconies', 'Ceilings', 'Lighting'];

function LandingPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-2xl bg-brand px-6 py-12 text-white md:px-12">
        <h1 className="max-w-2xl text-3xl font-bold md:text-5xl">
          Safe repair deals. Pay only after completion.
        </h1>
        <p className="mt-4 max-w-xl text-blue-100">
          Find verified installers in Kazakhstan and protect your money with a secure escrow flow.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/create-order" className="rounded-lg bg-white px-5 py-3 font-medium text-brand">
            Create Order
          </Link>
          <Link to="/orders" className="rounded-lg border border-white px-5 py-3 font-medium">
            Find Installer
          </Link>
        </div>
      </section>

      <section>
        <SectionTitle title="Popular categories" subtitle="Start with the service you need" />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {categories.map((category) => (
            <div key={category} className="rounded-xl border bg-white p-5 text-center font-semibold shadow-sm">
              {category}
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="How it works" />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            'Create your order with details and budget.',
            'Installers send proposals and prices.',
            'Pay securely and release funds after completion.'
          ].map((step, i) => (
            <div key={step} className="rounded-xl border bg-white p-5">
              <p className="text-sm text-slate-500">Step {i + 1}</p>
              <p className="mt-2 font-medium">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Testimonials" />
        <div className="grid gap-4 md:grid-cols-2">
          <blockquote className="rounded-xl border bg-white p-5">
            "I found a trusted balcony installer in 2 days. Payment felt safe."
          </blockquote>
          <blockquote className="rounded-xl border bg-white p-5">
            "Simple flow and clear reviews helped me choose the right contractor."
          </blockquote>
        </div>
      </section>

      <footer className="border-t py-6 text-sm text-slate-500">© 2026 Build Service. Trusted монтаж marketplace.</footer>
    </div>
  );
}

export default LandingPage;
