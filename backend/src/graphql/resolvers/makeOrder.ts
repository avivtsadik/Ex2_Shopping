import { OrderSchema } from "../../db/schema/orderSchema";
import { MutationMakeOrderArgs, QueryItemArgs } from "../index";

export default {
  Mutation: {
    makeOrder: async (
      parent: any,
      args: MutationMakeOrderArgs,
      contextValue: any,
      info: any
    ) => {
      const ItemModel1 = new OrderSchema(args.orderData);
      await ItemModel1.save();
      return "success";
    },
  },
};
