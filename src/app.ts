import express from "express";
import "dotenv/config";
import adminController from "./controllers/adminController";
import usersController from "./controllers/usersController";
import candidatesController from "./controllers/candidatesController";
import votesController from "./controllers/votesController";
import { connectToMongo } from "./config/db";
import cors from "cors";
import { compare, hash } from "bcrypt";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());
connectToMongo();

app.use("/api/users", usersController);
app.use("/api/admin", adminController);
app.use("/api/votes", votesController);
app.use("/api/candidates", candidatesController);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
