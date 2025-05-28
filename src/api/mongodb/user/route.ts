import express from 'express';
import { connectDB } from '@/lib/db';
import { User } from '@/models/User';

const router = express.Router();

router.post('/signup', async (req, res) => {
  await connectDB();
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: 'User created' });
  } catch (err) {
    res.status(400).json({ error: 'User creation failed', err });
  }
});

export default router;
