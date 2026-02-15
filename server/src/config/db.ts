import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// This connects to your Render PostgreSQL database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  
});

pool.on('connect', () => {
  console.log('✅ Connected to PostgreSQL Database');
});

pool.on('error', (err) => {
  console.error('❌ Database connection error', err);
});

export default pool;
