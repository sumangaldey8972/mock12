const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/user.routes");
const jobRouter = require("./routes/job.routes");
const connect = require("./db/db");
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.use("/job", jobRouter);

app.get("/", (req, res) => {
  res.send("Welcome to MOCK 12");
});

app.listen(PORT, async () => {
  await connect();
  console.log(`server started on ${PORT}`);
});
