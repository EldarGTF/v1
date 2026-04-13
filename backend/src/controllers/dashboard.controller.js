import { bids, orders, payments } from '../services/mockData.js';

export function clientDashboard(req, res) {
  const myOrders = orders.filter((o) => o.clientId === req.user.id);
  res.json({ myOrders, payments: payments.filter((p) => myOrders.some((o) => o.id === p.orderId)) });
}

export function installerDashboard(req, res) {
  const myBids = bids.filter((b) => b.installerId === req.user.id);
  const activeOrderIds = myBids.map((b) => b.orderId);
  const activeJobs = orders.filter((o) => activeOrderIds.includes(o.id));
  const earnings = myBids.reduce((sum, b) => sum + (b.price || 0), 0);

  res.json({
    availableJobs: orders.filter((o) => o.status === 'searching'),
    activeJobs,
    earnings
  });
}
