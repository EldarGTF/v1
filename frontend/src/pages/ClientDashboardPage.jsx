import SectionTitle from '../components/SectionTitle';

function ClientDashboardPage() {
  return (
    <section className="space-y-6">
      <SectionTitle title="Client dashboard" subtitle="Track your orders safely" />
      <div className="grid gap-4 md:grid-cols-3">
        {['searching', 'in progress', 'completed'].map((status) => (
          <div key={status} className="rounded-xl border bg-white p-4">
            <p className="text-xs uppercase text-slate-500">Status</p>
            <p className="text-lg font-semibold">{status}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl border bg-white p-4">
        <h3 className="font-semibold">Chat with installer</h3>
        <div className="mt-3 rounded border p-3 text-sm text-slate-600">
          Installer: We can start tomorrow at 10:00.
        </div>
      </div>
      <button className="rounded-lg bg-green-600 px-4 py-3 text-white">Confirm completion</button>
    </section>
  );
}

export default ClientDashboardPage;
