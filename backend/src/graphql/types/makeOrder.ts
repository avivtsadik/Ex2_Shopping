import { gql } from "graphql-tag";

export default gql`
  input OrderData {
    orderedItems: [Int]
    firstName: String
    lastName: String
  }

  type Mutation {
    makeOrder(orderData: OrderData): String
  }
`;
