import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "dotenv";

config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Childcare SaaS product API!");
});

// define register route
// app.use("/api/users/register", registerController.register);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
