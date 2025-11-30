import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// --- HARDCODED ADMIN CREDENTIALS ---
// Admin: admin / Password: truk2025
const ADMIN_USER = "admin";
const ADMIN_PASS = "truk2025"; 

// Only one route: LOGIN
app.post('/api/login', (req: Request, res: Response) => {
  const { username, password } = req.body;
  
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    // Return a simple success token
    res.json({ success: true, token: 'admin-access-granted-123' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid Credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});