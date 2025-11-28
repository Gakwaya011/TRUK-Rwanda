import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// --- MOCK DATABASE (In-Memory) ---
// In a real app, this would be a MySQL or MongoDB database
let jobs = [
  {
    id: 1,
    title: 'Heavy Duty Truck Driver',
    type: 'On-site',
    location: 'Kigali, Rwanda',
    department: 'Logistics',
    date: 'Posted 2 days ago'
  },
  {
    id: 2,
    title: 'Cold Chain Technician',
    type: 'On-site',
    location: 'Rubavu',
    department: 'Maintenance',
    date: 'Posted 5 days ago'
  }
];

// --- ADMIN CREDENTIALS ---
// Ideally, put these in your .env file
const ADMIN_USER = "admin";
const ADMIN_PASS = "truk2025"; 

// --- ROUTES ---

// 1. Get All Jobs (Public)
app.get('/api/jobs', (req: Request, res: Response) => {
  res.json(jobs);
});

// 2. Add a Job (Admin Only)
app.post('/api/jobs', (req: Request, res: Response) => {
  const newJob = {
    id: Date.now(), // Simple ID generation
    ...req.body,
    date: 'Just now'
  };
  jobs.unshift(newJob); // Add to top of list
  res.json(newJob);
});

// 3. Delete a Job (Admin Only)
app.delete('/api/jobs/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  jobs = jobs.filter(job => job.id !== Number(id));
  res.json({ success: true });
});

// 4. Admin Login Check
app.post('/api/login', (req: Request, res: Response) => {
  const { username, password } = req.body;
  
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    res.json({ success: true, token: 'fake-jwt-token-secret-123' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid Credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});