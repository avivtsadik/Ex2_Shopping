import {Item, QueryItemArgs} from "../index";
import {ItemModel} from "../../db/schema/itemSchema";

export default {
    Query: {
        item: (parent: any, args: QueryItemArgs, contextValue: any, info: any) => {
            return ItemModel.findById(args.id);
        },
    }
};
