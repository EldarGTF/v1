function OrderCard({ order }) {
  return (
    <article className="rounded-xl border bg-white p-4 shadow-sm">
      <h3 className="font-semibold">{order.serviceType}</h3>
      <p className="mt-1 text-sm text-slate-600">{order.description}</p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
        <span className="rounded bg-slate-100 px-2 py-1">{order.address}</span>
        <span className="rounded bg-slate-100 px-2 py-1">Budget: {order.budget} ₸</span>
        <span className="rounded bg-blue-100 px-2 py-1 text-blue-800">{order.status}</span>
      </div>
      <p className="mt-3 text-sm">Installer responses: {order.bids}</p>
    </article>
  );
}

export default OrderCard;
