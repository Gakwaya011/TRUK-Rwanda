import { Request, Response } from 'express';
import pool from '../config/db';
import cloudinary from '../config/cloudinary';

// GET ALL POSTS
export const getPosts = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM blogs ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// GET SINGLE POST
export const getPostById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM blogs WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Post not found" });
    }
    
    res.json(result.rows[0]);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// CREATE POST
export const createPost = async (req: Request, res: Response) => {
  const { title, excerpt, content, category, is_featured } = req.body;
  let imageUrl = req.body.image || ""; 

  try {
    const file = (req as any).file;
    if (file) {
      const b64 = Buffer.from(file.buffer).toString('base64');
      const dataURI = "data:" + file.mimetype + ";base64," + b64;
      const uploadResponse = await cloudinary.uploader.upload(dataURI, { folder: "truk_blogs" });
      imageUrl = uploadResponse.secure_url;
    }

    const newPost = await pool.query(
      'INSERT INTO blogs (title, excerpt, content, image, category, is_featured) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [title, excerpt, content, imageUrl, category, is_featured || false]
    );

    res.json(newPost.rows[0]);
  } catch (err: any) {
    console.error("Backend Error:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

// UPDATE POST (This is the one that was likely broken)
export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, excerpt, content, category, is_featured } = req.body;
  
  try {
    // 1. Get current post to preserve old image if needed
    const currentPost = await pool.query('SELECT * FROM blogs WHERE id = $1', [id]);
    if (currentPost.rows.length === 0) return res.status(404).json({ message: "Post not found" });
    
    let imageUrl = currentPost.rows[0].image; // Start with old image

    // 2. If user provided a Link, use it
    if (req.body.image) imageUrl = req.body.image;

    // 3. If user Uploaded a File, use it
    const file = (req as any).file;
    if (file) {
      const b64 = Buffer.from(file.buffer).toString('base64');
      const dataURI = "data:" + file.mimetype + ";base64," + b64;
      const uploadResponse = await cloudinary.uploader.upload(dataURI, { folder: "truk_blogs" });
      imageUrl = uploadResponse.secure_url;
    }

    // 4. Update Database
    const updatedPost = await pool.query(
      'UPDATE blogs SET title=$1, excerpt=$2, content=$3, image=$4, category=$5, is_featured=$6 WHERE id=$7 RETURNING *',
      [title, excerpt, content, imageUrl, category, is_featured, id]
    );

    res.json(updatedPost.rows[0]);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// DELETE POST
export const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM blogs WHERE id = $1', [id]);
    res.json({ message: "Post deleted" });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};