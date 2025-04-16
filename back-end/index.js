import express, { json } from "express";
import cors from "cors";
import { connectMongoDB } from "./connectDB.js";
import { userRouter } from "./routes/user.js";

const port = 8001;
// const port = process.env.PORT;
connectMongoDB();

const app = express();
app.use(json());
app.use(cors());

app.use("/user", userRouter);

app.get("/", (req, res) => {
  console.log("working");

  res.send("hello w");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
