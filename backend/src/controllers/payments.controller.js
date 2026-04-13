import { payments } from '../services/mockData.js';

export function holdFunds(req, res) {
  const payment = {
    id: payments.length + 1,
    orderId: req.body.orderId,
    amount: req.body.amount,
    status: 'held'
  };
  payments.push(payment);
  res.status(201).json(payment);
}

export function releaseFunds(req, res) {
  const orderId = Number(req.params.orderId);
  const payment = payments.find((p) => p.orderId === orderId);
  if (!payment) return res.status(404).json({ message: 'Payment not found' });

  payment.status = 'released';
  res.json(payment);
}
