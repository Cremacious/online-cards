import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI || '';

export async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(uri);
  }
}
