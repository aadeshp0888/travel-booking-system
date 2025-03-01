require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const cors = require('cors');
const { typeDefs, resolvers } = require('./schema.js'); // ✅ Ensure `.js` is mentioned


const app = express();
app.use(cors());
app.use(express.json());

// Setup Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

server.start().then(() => {
  app.use('/graphql', express.json(), (req, res) => res.send('GraphQL Running'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
