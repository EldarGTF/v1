import { reviews, users } from '../services/mockData.js';

export function listInstallers(_req, res) {
  const installers = users.filter((u) => u.role === 'installer').map((installer) => ({
    ...installer,
    reviews: reviews.filter((r) => r.installerId === installer.id)
  }));
  res.json(installers);
}

export function getInstallerProfile(req, res) {
  const id = Number(req.params.id);
  const installer = users.find((u) => u.id === id && u.role === 'installer');
  if (!installer) return res.status(404).json({ message: 'Installer not found' });

  res.json({
    ...installer,
    portfolio: ['window_1.jpg', 'balcony_2.jpg'],
    reviews: reviews.filter((r) => r.installerId === id)
  });
}

export function addReview(req, res) {
  const id = Number(req.params.id);
  const review = {
    id: reviews.length + 1,
    installerId: id,
    clientId: req.user.id,
    rating: req.body.rating,
    comment: req.body.comment
  };
  reviews.push(review);
  res.status(201).json(review);
}
