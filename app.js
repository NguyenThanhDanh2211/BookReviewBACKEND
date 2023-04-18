const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Book Review Application." });
});

const authRouter = require("./app/routes/user.route");
app.use("/api/auth", authRouter);

const bookRouter = require("./app/routes/book.route");
app.use("/api/book", bookRouter);

module.exports = app;
