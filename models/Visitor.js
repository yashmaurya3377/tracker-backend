import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
  ip: String,
  username: String,
  browser: String,
  os: String,
  screen: String,
  language: String,
  deviceMemory: String,
  cpuCores: String,
  battery: String,
  lastVisit: { type: Date, default: Date.now },
});

const Visitor = mongoose.model("Visitor", visitorSchema);

export default Visitor;
