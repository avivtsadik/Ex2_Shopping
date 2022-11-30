import mongoose from "mongoose";

interface Item {
  productName: String;
  desc: String;
  imagePrimary: String;
  price: Number;
}

const itemSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  imagePrimary: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const itemDb = mongoose.model("Item", itemSchema);

const build = (attr: Item) => {
  return new itemDb(attr);
};

build({
  productName: "snack 1",
  desc: "I am the best snack1",
  price: 10,
  imagePrimary:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Bamba_snack.jpg/1200px-Bamba_snack.jpg",
});
// todo finish configurate monogo an backend
export { itemDb };
