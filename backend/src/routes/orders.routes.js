import { Router } from 'express';
import { applyToOrder, createOrder, listOrders, orderChat } from '../controllers/orders.controller.js';
import { requireRole, verifyToken } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', listOrders);
router.post('/', verifyToken, requireRole('client'), createOrder);
router.post('/:orderId/apply', verifyToken, requireRole('installer'), applyToOrder);
router.get('/:orderId/chat', verifyToken, orderChat);
router.post('/:orderId/chat', verifyToken, orderChat);

export default router;
