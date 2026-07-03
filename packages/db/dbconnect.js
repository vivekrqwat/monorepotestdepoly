import mongoose from "mongoose";
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from this package directory if present
dotenv.config({ path: path.resolve(__dirname, '.env') });

export const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI || process.env.MG_URI;

        if (!uri) {
            throw new Error("MONGO_URI not set");
        }

        await mongoose.connect(uri);

        console.log("✅ MongoDB connected");
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error.message);
        process.exit(1); // Optional: Stop the server if DB connection fails
    }
};