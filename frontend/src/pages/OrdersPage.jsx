import OrderCard from '../components/OrderCard';
import SectionTitle from '../components/SectionTitle';

const orders = [
  {
    id: 1,
    serviceType: 'Установка окон',
    description: 'Нужно установить 3 энергосберегающих окна в квартире.',
    address: 'Алматы, Абая 25',
    budget: 240000,
    status: 'Поиск мастера',
    bids: 4
  },
  {
    id: 2,
    serviceType: 'Отделка балкона',
    description: 'Утепление и внутренняя отделка балкона.',
    address: 'Астана, Туран 14',
    budget: 310000,
    status: 'В работе',
    bids: 6
  }
];

function OrdersPage() {
  return (
    <section>
      <SectionTitle title="Биржа заказов" subtitle="Сравните предложения от мастеров" />
      <div className="grid gap-4">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </section>
  );
}

export default OrdersPage;
