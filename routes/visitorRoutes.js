import express from "express";
import Visitor from "../models/Visitor.js";

const router = express.Router();

// Save or Update visitor data
router.post("/track", async (req, res) => {
  try {
    const { ip } = req.body;

    let visitor = await Visitor.findOne({ ip });

    if (visitor) {
      // Update existing visitor
      visitor = await Visitor.findOneAndUpdate({ ip }, req.body, {
        new: true,
      });
      res.json({ success: true, updated: true, visitor });
    } else {
      // Create new visitor
      const newVisitor = new Visitor(req.body);
      await newVisitor.save();
      res.json({ success: true, created: true, visitor: newVisitor });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all visitors
router.get("/", async (req, res) => {
  try {
    const visitors = await Visitor.find().sort({ date: -1 });
    res.json(visitors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
