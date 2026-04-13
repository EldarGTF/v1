import { Router } from 'express';
import { addReview, getInstallerProfile, listInstallers } from '../controllers/installers.controller.js';
import { requireRole, verifyToken } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', listInstallers);
router.get('/:id', getInstallerProfile);
router.post('/:id/reviews', verifyToken, requireRole('client'), addReview);

export default router;
