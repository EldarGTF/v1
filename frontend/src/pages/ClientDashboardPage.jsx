import SectionTitle from '../components/SectionTitle';

function ClientDashboardPage() {
  return (
    <section className="space-y-6">
      <SectionTitle title="Кабинет клиента" subtitle="Отслеживайте заказы и безопасные сделки" />
      <div className="grid gap-4 md:grid-cols-3">
        {['Поиск мастера', 'В работе', 'Завершено'].map((status) => (
          <div key={status} className="rounded-xl border bg-white p-4">
            <p className="text-xs uppercase text-slate-500">Статус</p>
            <p className="text-lg font-semibold">{status}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl border bg-white p-4">
        <h3 className="font-semibold">Чат с мастером</h3>
        <div className="mt-3 rounded border p-3 text-sm text-slate-600">Мастер: Можем начать завтра в 10:00.</div>
      </div>
      <button className="rounded-lg bg-green-600 px-4 py-3 text-white">Подтвердить завершение</button>
    </section>
  );
}

export default ClientDashboardPage;
