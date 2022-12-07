import {Schema, model} from "mongoose";
import {Item} from "../../graphql";

const itemSchema = new Schema<Omit<Item, '__typename' | 'id'>>({
    name: {type: String, required: true},
    price: {type: Number, required: true}
});

export const ItemModel = model('item', itemSchema);
