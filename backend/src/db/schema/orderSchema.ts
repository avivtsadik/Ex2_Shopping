import { Schema, model } from "mongoose";
import item from "../../graphql/types/item";
import { ItemModel } from "./itemSchema";

const orderSchema = new Schema({
  orderedItems: { type: [Number], required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

export const OrderSchema = model("order", orderSchema);
