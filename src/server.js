import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 8001;

app.get("/", (req, res) => {
  res.send("hello world with be trello app");
});
app.listen(port, () => {
  console.log("Node.js server listening on port " + port);
});
