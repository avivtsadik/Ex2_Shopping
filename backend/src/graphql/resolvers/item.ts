import { Item, QueryItemArgs } from "../index";
import { ItemModel } from "../../db/schema/itemSchema";

export default {
  Query: {
    item: async (
      parent: any,
      args: QueryItemArgs,
      contextValue: any,
      info: any
    ) => {
      const items = await ItemModel.find();
      return items;
    },
  },
};
