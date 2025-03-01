const { gql } = require("graphql-tag");

const typeDefs = gql`
  type Booking {
    id: ID!
    name: String!
    destination: String!
    date: String!
    email: String!
  }

  type Query {
    getBookings: [Booking]
  }

  type Mutation {
    addBooking(name: String!, destination: String!, date: String!, email: String!): Booking
  }
`;

module.exports = typeDefs;
