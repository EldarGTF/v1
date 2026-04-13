import OrderCard from '../components/OrderCard';
import SectionTitle from '../components/SectionTitle';

const orders = [
  {
    id: 1,
    serviceType: 'Windows installation',
    description: 'Need to install 3 energy-efficient windows in apartment.',
    address: 'Almaty, Abay 25',
    budget: 240000,
    status: 'searching',
    bids: 4
  },
  {
    id: 2,
    serviceType: 'Balcony finishing',
    description: 'Insulation and interior finishing for balcony.',
    address: 'Astana, Turan 14',
    budget: 310000,
    status: 'in progress',
    bids: 6
  }
];

function OrdersPage() {
  return (
    <section>
      <SectionTitle title="Orders marketplace" subtitle="Compare offers from installers" />
      <div className="grid gap-4">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </section>
  );
}

export default OrdersPage;
