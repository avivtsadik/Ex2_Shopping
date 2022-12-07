import {Schema, model} from "mongoose";

const itemSchema = new Schema({
    userId: {type: String, required: true}
});

export const ItemModel = model('item', itemSchema);
