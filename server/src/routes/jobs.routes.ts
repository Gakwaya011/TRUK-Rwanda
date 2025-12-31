import { Router } from 'express';
// 1. ADD 'getJobById' TO THE IMPORTS
import { getJobs, createJob, deleteJob, getJobById } from '../controllers/jobs.controller';
import { protect } from '../middleware/authMiddleware'; 

const router = Router();

// Public Route: Anyone can see ALL jobs
router.get('/', getJobs);

// --- 2. ADD THIS NEW ROUTE HERE ---
// Public Route: Anyone can see ONE specific job
router.get('/:id', getJobById);

// Protected Routes: Only logged-in Admin can create or delete
router.post('/', protect, createJob);
router.delete('/:id', protect, deleteJob);

export default router;