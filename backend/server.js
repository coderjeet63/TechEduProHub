import * as dotenv from 'dotenv'; 
dotenv.config(); 
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoute from './routes/userRoute.js';
import contactRoutes from "./routes/contactRoutes.js";
import cartRoute from './routes/cartRoutes.js'

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json()); // parse JSON bodies
app.use(cors()); // enable CORS

// ✅ Routes
app.use("/api/auth", userRoute);
app.use("/api/contact", contactRoutes);
app.use("/api/cart" ,cartRoute )




// Start server
const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB connected successfully");

        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error("❌ Error connecting to MongoDB:", err.message);
    }
};

startServer();
