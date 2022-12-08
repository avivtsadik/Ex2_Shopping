import { Schema, model } from "mongoose";
import { Item } from "../../graphql";

const itemSchema = new Schema<Omit<Item, "__typename">>({
  id: { type: Number, required: true },
  storeName: { type: String, required: true },
  productName: { type: String, required: true },
  desc: { type: String, required: true },
  imagePrimary: { type: String, required: true },
  price: { type: Number, required: true },
});

export const ItemModel = model("item", itemSchema);
