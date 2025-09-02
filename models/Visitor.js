import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  username: String,
  browser: String,
  os: String,
  screen: String,
  language: String,
  deviceMemory: Number,
  cpuCores: Number,
  battery: String,
  lastVisit: { type: Date, default: Date.now },
});

const Visitor = mongoose.model("Visitor", visitorSchema);

export default Visitor;
