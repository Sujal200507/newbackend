require("dotenv").config();
const express = require("express");
const app = express();
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");

const allowedOrigins = [
  "http://localhost:5173",
  "https://newfrontend-sigma.vercel.app"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/",(req, res) => {
  res.status(200).json({status: "ok"});
});
app.get("/healthz", (req, res) => {
  res.status(200).json({ status: "healthy" });
});
app.use("/ai", aiRoutes);

module.exports = app;


