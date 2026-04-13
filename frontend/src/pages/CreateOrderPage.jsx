import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';

function CreateOrderPage() {
  const [form, setForm] = useState({
    serviceType: 'Окна',
    description: '',
    address: '',
    budget: ''
  });

  const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Заказ создан (демо). Подключите API POST /orders для сохранения.');
  };

  return (
    <section className="mx-auto max-w-2xl rounded-xl border bg-white p-6">
      <SectionTitle title="Создание заказа" subtitle="Опишите задачу по ремонту / монтажу" />
      <form className="space-y-4" onSubmit={handleSubmit}>
        <select name="serviceType" className="w-full rounded border p-2" value={form.serviceType} onChange={onChange}>
          <option>Окна</option>
          <option>Балконы</option>
          <option>Потолки</option>
          <option>Освещение</option>
        </select>
        <textarea
          name="description"
          required
          className="w-full rounded border p-2"
          placeholder="Описание задачи"
          rows={4}
          value={form.description}
          onChange={onChange}
        />
        <input type="file" className="w-full rounded border p-2" multiple />
        <input
          name="address"
          required
          className="w-full rounded border p-2"
          placeholder="Адрес"
          value={form.address}
          onChange={onChange}
        />
        <input
          name="budget"
          required
          className="w-full rounded border p-2"
          placeholder="Бюджет (₸)"
          value={form.budget}
          onChange={onChange}
        />
        <button className="w-full rounded-lg bg-brand px-4 py-3 font-medium text-white">Отправить заказ</button>
      </form>
    </section>
  );
}

export default CreateOrderPage;
