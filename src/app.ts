import express from "express";
import "dotenv/config";
const port = process.env.PORT||2000;
const app = express();
app.listen(port, () => {
  console.log(`server is visit "http://localhost:${port}"`);
});
