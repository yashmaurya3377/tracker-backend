import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import visitorRoutes from "./routes/visitorRoutes.js";

dotenv.config();
const app = express();

// Middleware
// app.use(cors());
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

// Connect DB
connectDB();

// Routes
app.use("/api/visitors", visitorRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
