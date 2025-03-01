import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql", // Replace with your actual backend URL
  cache: new InMemoryCache(),
});

export default client;
