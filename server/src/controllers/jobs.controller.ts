import { Request, Response } from 'express';
import pool from '../config/db';
import { Job } from '../models/Job';

// GET ALL JOBS (Public)
export const getJobs = async (req: Request, res: Response) => {
  try {
    // Fetch jobs and sort by newest first
    const result = await pool.query('SELECT * FROM jobs ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// CREATE JOB (Admin Only)
export const createJob = async (req: Request, res: Response) => {
  // FIX: Only use this one line. It extracts data AND checks the type.
  const { title, type, location, department, description }: Job = req.body;

  try {
    const newJob = await pool.query(
      'INSERT INTO jobs (title, type, location, department, description) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, type, location, department, description]
    );

    res.json(newJob.rows[0]);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// DELETE JOB (Admin Only)
export const deleteJob = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM jobs WHERE id = $1', [id]);
    res.json({ message: "Job deleted" });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};