import { bids, chats, orders } from '../services/mockData.js';

export function listOrders(_req, res) {
  const data = orders.map((order) => ({
    ...order,
    responses: bids.filter((b) => b.orderId === order.id)
  }));
  res.json(data);
}

export function createOrder(req, res) {
  const newOrder = {
    id: orders.length + 1,
    clientId: req.user.id,
    ...req.body,
    status: 'searching'
  };
  orders.push(newOrder);
  res.status(201).json(newOrder);
}

export function applyToOrder(req, res) {
  const orderId = Number(req.params.orderId);
  const bid = {
    id: bids.length + 1,
    orderId,
    installerId: req.user.id,
    price: req.body.price,
    message: req.body.message
  };
  bids.push(bid);
  res.status(201).json(bid);
}

export function orderChat(req, res) {
  const orderId = Number(req.params.orderId);
  if (req.method === 'GET') {
    return res.json(chats.filter((m) => m.orderId === orderId));
  }

  const message = {
    id: chats.length + 1,
    orderId,
    senderId: req.user.id,
    message: req.body.message
  };
  chats.push(message);
  return res.status(201).json(message);
}
