const { ApolloServer, gql } = require("apollo-server-express");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
    getLoans: [Loan]
  }

  type Loan {
    name: String
    loanAmount: Float
    paidAmount: Float
    emi: Float
    notifications: Boolean
    status: String
    coverImage: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
    getLoans: () => {
      return [
        {
          name: "HDFC Bank",
          loanAmount: 1002554,
          paidAmount: 150000,
          emi: 16101,
          notifications: true,
          status: "In Progress",
          coverImage:
            "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        },
        {
          name: "HDFC Bank",
          loanAmount: 1002554,
          paidAmount: 150000,
          emi: 16101,
          notifications: true,
          status: "In Progress",
          coverImage:
            "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        },
      ];
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

module.exports = server;
