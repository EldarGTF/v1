import { useParams } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

function PaymentPage() {
  const { orderId } = useParams();

  return (
    <section className="mx-auto max-w-xl space-y-4 rounded-xl border bg-white p-6">
      <SectionTitle title="Безопасная оплата" subtitle={`Заказ №${orderId}`} />
      <p className="text-sm text-slate-600">Сумма для резервирования в эскроу: ₸ 240,000</p>
      <p className="rounded bg-blue-50 p-3 text-blue-800">Средства удерживаются до подтверждения завершения работ.</p>
      <button className="w-full rounded-lg bg-brand px-4 py-3 text-white">Перейти к безопасной оплате</button>
    </section>
  );
}

export default PaymentPage;
