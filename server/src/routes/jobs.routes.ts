import { Router } from 'express';
import { getJobs, createJob, deleteJob } from '../controllers/jobs.controller';
import { protect } from '../middleware/authMiddleware'; // We created this earlier

const router = Router();

// Public Route: Anyone can see jobs
router.get('/', getJobs);

// Protected Routes: Only logged-in Admin can create or delete
router.post('/', protect, createJob);
router.delete('/:id', protect, deleteJob);

export default router;