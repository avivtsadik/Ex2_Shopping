import express from "express";
import { json } from "body-parser";
import { itemsRouter } from "./routes/items";
import mongoose from "mongoose";

const app = express();
app.use(json());
app.use(itemsRouter);
mongoose.connect(
  "mongodb://localhost:27017/items",
  {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  },
  () => {
    console.log("connected to database");
  }
);

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
