import { useParams } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

function InstallerProfilePage() {
  const { id } = useParams();

  return (
    <section className="space-y-6 rounded-xl border bg-white p-6">
      <SectionTitle title={`Installer #${id}`} subtitle="Verified professional profile" />
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-slate-200" />
        <div>
          <p className="font-semibold">Nursultan Montage Pro</p>
          <p className="text-sm text-slate-600">Rating: 4.9 (128 reviews)</p>
        </div>
      </div>
      <div>
        <h3 className="font-semibold">Portfolio</h3>
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="h-20 rounded bg-slate-100" />
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold">Recent reviews</h3>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-slate-700">
          <li>"Arrived on time and clean work."</li>
          <li>"Clear communication and accurate budget."</li>
        </ul>
      </div>
      <button className="rounded-lg bg-brand px-4 py-3 text-white">Select Installer</button>
    </section>
  );
}

export default InstallerProfilePage;
