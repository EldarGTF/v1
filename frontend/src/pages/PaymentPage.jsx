import { useParams } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

function PaymentPage() {
  const { orderId } = useParams();

  return (
    <section className="mx-auto max-w-xl space-y-4 rounded-xl border bg-white p-6">
      <SectionTitle title="Secure payment" subtitle={`Order #${orderId}`} />
      <p className="text-sm text-slate-600">Amount to hold in escrow: ₸ 240,000</p>
      <p className="rounded bg-blue-50 p-3 text-blue-800">Funds held until completion.</p>
      <button className="w-full rounded-lg bg-brand px-4 py-3 text-white">Proceed to secure payment</button>
    </section>
  );
}

export default PaymentPage;
