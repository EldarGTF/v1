import { Router } from 'express';
import { holdFunds, releaseFunds } from '../controllers/payments.controller.js';
import { requireRole, verifyToken } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/hold', verifyToken, requireRole('client'), holdFunds);
router.post('/release/:orderId', verifyToken, requireRole('client'), releaseFunds);

export default router;
