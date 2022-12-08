import { gql } from "graphql-tag";

export default gql`
  type Item {
    id: Int
    storeName: String
    productName: String
    desc: String
    price: Int
    imagePrimary: String
  }

  type Query {
    item(id: Int): [Item]
  }
`;
