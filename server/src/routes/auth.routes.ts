import { Router } from 'express';
import { registerAdmin, loginAdmin } from '../controllers/auth.controller';

const router = Router();

// POST /api/auth/register (Use once to create your admin account)
router.post('/register', registerAdmin);

// POST /api/auth/login
router.post('/login', loginAdmin);

export default router;