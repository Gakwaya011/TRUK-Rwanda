import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Import Routes
import authRoutes from './routes/auth.routes';
import jobRoutes from './routes/jobs.routes';
import blogRoutes from './routes/blog.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Register Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);   // <-- Added
app.use('/api/blogs', blogRoutes); // <-- Added

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});