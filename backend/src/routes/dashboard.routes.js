import { Router } from 'express';
import { clientDashboard, installerDashboard } from '../controllers/dashboard.controller.js';
import { requireRole, verifyToken } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/client', verifyToken, requireRole('client'), clientDashboard);
router.get('/installer', verifyToken, requireRole('installer'), installerDashboard);

export default router;
