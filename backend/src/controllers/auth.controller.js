import jwt from 'jsonwebtoken';
import { users } from '../services/mockData.js';

export function register(req, res) {
  const { fullName, email, password, role } = req.body;
  const user = { id: users.length + 1, fullName, email, password, role };
  users.push(user);
  res.status(201).json({ id: user.id, fullName, email, role });
}

export function login(req, res) {
  const { email } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'dev_secret', {
    expiresIn: '7d'
  });

  res.json({ token, user: { id: user.id, fullName: user.fullName, role: user.role } });
}
