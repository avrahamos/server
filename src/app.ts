import express from "express";
import "dotenv/config";
import adminController from "./controllers/adminController";
import usersController from "./controllers/usersController";
import candidatesController from "./controllers/candidatesController";
import votesController from "./controllers/votesController";
import { connectToMongo } from "./config/db";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import { connectSocket } from "./sockot/io";

const PORT = process.env.PORT || 3000;
const app = express();
const httpServer = http.createServer(app);
export const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: "*",
  },
});
io.on("connection", connectSocket);

app.use(express.json());
app.use(cors());
connectToMongo();

app.use("/api/users", usersController);
app.use("/api/admin", adminController);
app.use("/api/votes", votesController);
app.use("/api/candidates", candidatesController);

httpServer.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
