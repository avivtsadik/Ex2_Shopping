import {gql} from "graphql-tag";

export default gql`
    type Item {
        id: Int
        name: String
        price: Int  
    }
    
    type Query {
        item(id: Int): [Item]
    }
    
`
