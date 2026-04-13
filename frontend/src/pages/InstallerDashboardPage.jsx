import SectionTitle from '../components/SectionTitle';

function InstallerDashboardPage() {
  return (
    <section className="space-y-6">
      <SectionTitle title="Installer dashboard" subtitle="Manage incoming and active jobs" />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-4">
          <h3 className="font-semibold">Available jobs</h3>
          <p className="mt-2 text-sm text-slate-600">12 jobs match your profile.</p>
          <button className="mt-3 rounded bg-brand px-3 py-2 text-sm text-white">Apply to job</button>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <h3 className="font-semibold">My active jobs</h3>
          <p className="mt-2 text-sm text-slate-600">3 active installations in progress.</p>
        </div>
      </div>
      <div className="rounded-xl border bg-white p-4">
        <p className="text-sm text-slate-500">Earnings</p>
        <p className="text-2xl font-bold text-brand">₸ 1,240,000</p>
      </div>
    </section>
  );
}

export default InstallerDashboardPage;
