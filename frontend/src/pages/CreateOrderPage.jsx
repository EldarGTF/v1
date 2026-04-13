import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';

function CreateOrderPage() {
  const [form, setForm] = useState({
    serviceType: 'Windows',
    description: '',
    address: '',
    budget: ''
  });

  const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order created (mock). Connect API POST /orders to persist.');
  };

  return (
    <section className="mx-auto max-w-2xl rounded-xl border bg-white p-6">
      <SectionTitle title="Create order" subtitle="Describe your ремонт / монтаж task" />
      <form className="space-y-4" onSubmit={handleSubmit}>
        <select name="serviceType" className="w-full rounded border p-2" value={form.serviceType} onChange={onChange}>
          <option>Windows</option>
          <option>Balconies</option>
          <option>Ceilings</option>
          <option>Lighting</option>
        </select>
        <textarea
          name="description"
          required
          className="w-full rounded border p-2"
          placeholder="Task description"
          rows={4}
          value={form.description}
          onChange={onChange}
        />
        <input type="file" className="w-full rounded border p-2" multiple />
        <input
          name="address"
          required
          className="w-full rounded border p-2"
          placeholder="Address"
          value={form.address}
          onChange={onChange}
        />
        <input
          name="budget"
          required
          className="w-full rounded border p-2"
          placeholder="Budget (₸)"
          value={form.budget}
          onChange={onChange}
        />
        <button className="w-full rounded-lg bg-brand px-4 py-3 font-medium text-white">Submit order</button>
      </form>
    </section>
  );
}

export default CreateOrderPage;
