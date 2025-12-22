import { Router } from 'express';
// Import updatePost here 👇
import { getPosts, getPostById, createPost, deletePost, updatePost } from '../controllers/blog.controller';
import { protect } from '../middleware/authMiddleware';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() });

const router = Router();

router.get('/', getPosts);
router.get('/:id', getPostById);

router.post('/', protect, upload.single('imageFile'), createPost);

// THIS IS THE LINE YOU MIGHT BE MISSING 👇
router.put('/:id', protect, upload.single('imageFile'), updatePost);

router.delete('/:id', protect, deletePost);

export default router;