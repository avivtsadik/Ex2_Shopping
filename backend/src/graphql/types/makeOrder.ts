import {gql} from "graphql-tag";

export default gql`
        type Mutation {
            makeOrder(ids: [Int]): String
        }
    `
