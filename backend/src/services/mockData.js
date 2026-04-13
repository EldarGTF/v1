export const users = [];

export const orders = [
  {
    id: 1,
    clientId: 1,
    serviceType: 'Windows',
    description: 'Install 3 windows',
    address: 'Almaty',
    budget: 240000,
    status: 'searching'
  }
];

export const bids = [{ id: 1, orderId: 1, installerId: 2, price: 230000, message: 'Can finish in 2 days' }];

export const reviews = [
  { id: 1, installerId: 2, clientId: 1, rating: 5, comment: 'Excellent монтаж work and communication.' }
];

export const chats = [{ id: 1, orderId: 1, senderId: 1, message: 'When can you start?' }];

export const payments = [{ id: 1, orderId: 1, amount: 240000, status: 'held' }];
