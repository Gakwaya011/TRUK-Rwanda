import { Request, Response } from 'express';
import pool from '../config/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// REGISTER ADMIN (Run this once via Postman to create your account, then disable/ignore it)
export const registerAdmin = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert into DB
    const newAdmin = await pool.query(
      'INSERT INTO admins (username, password) VALUES ($1, $2) RETURNING *',
      [username, hashedPassword]
    );

    res.json(newAdmin.rows[0]);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// LOGIN ADMIN
export const loginAdmin = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    // Check if user exists
    const result = await pool.query('SELECT * FROM admins WHERE username = $1', [username]);

    if (result.rows.length === 0) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const admin = result.rows[0];

    // Check password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    // Return JWT
    const payload = { admin: { id: admin.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    res.json({ token });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};