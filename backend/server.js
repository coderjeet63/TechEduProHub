// === UPDATE: Saare imports ek saath upar ===
import * as dotenv from 'dotenv'; 
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoute from './routes/userRoute.js';
import contactRoutes from "./routes/contactRoutes.js";
import cartRoute from './routes/cartRoutes.js';

// === UPDATE: Ab saare imports ke baad config() call karein ===
dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 3000;
// ... (baaki saara code waisa hi hai) ...
app.use(express.json());



app.use(
  cors({
    origin: ["http://localhost:5173", "https://techeduprohub-1.onrender.com"],
    credentials: true 
  })
);



app.use("/api/auth", userRoute);
app.use("/api/contact", contactRoutes);
app.use("/api/cart", cartRoute);

const startServer = async () => {
// ... (baaki saara code waisa hi hai) ...
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(" MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err.message);
  }
};

startServer();
