import express, { json } from "express";
import cors from "cors";
import { connectMongoDB } from "./connectDB.js";
import { userRouter } from "./routes/user.js";
import { foodCategoryRouter } from "./routes/foodCategory.js";
import { foodRouter } from "./routes/food.js";
import { foodOrderRouter } from "./routes/foodOrder.js";

const port = 8001;
// const port = process.env.PORT;
connectMongoDB();

const app = express();
app.use(json());
app.use(cors());

app.use("/user", userRouter);
app.use("/foodCategory", foodCategoryRouter);
app.use("/food", foodRouter);
app.use("/foodOrder", foodOrderRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
