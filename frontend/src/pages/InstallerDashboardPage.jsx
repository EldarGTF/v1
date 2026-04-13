import SectionTitle from '../components/SectionTitle';

function InstallerDashboardPage() {
  return (
    <section className="space-y-6">
      <SectionTitle title="Кабинет мастера" subtitle="Управляйте откликами и текущими объектами" />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-4">
          <h3 className="font-semibold">Доступные заказы</h3>
          <p className="mt-2 text-sm text-slate-600">12 заказов подходят под ваш профиль.</p>
          <button className="mt-3 rounded bg-brand px-3 py-2 text-sm text-white">Откликнуться на заказ</button>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <h3 className="font-semibold">Мои активные заказы</h3>
          <p className="mt-2 text-sm text-slate-600">3 объекта сейчас в работе.</p>
        </div>
      </div>
      <div className="rounded-xl border bg-white p-4">
        <p className="text-sm text-slate-500">Доход</p>
        <p className="text-2xl font-bold text-brand">₸ 1,240,000</p>
      </div>
    </section>
  );
}

export default InstallerDashboardPage;
