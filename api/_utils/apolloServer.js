const { ApolloServer, gql } = require('apollo-server-express');

// Retrieve
const server = (db) => {
  // Construct a schema, using GraphQL schema language
  const typeDefs = gql`
    input LoanInput {
      name: String,
      loanAmount: Float,
      paidAmount: Float,
      emi: Float,
      notifications: Boolean,
      status: String,
      coverImage: String
    }

    type Loan {
      _id: String,
      name: String,
      loanAmount: Float,
      paidAmount: Float,
      emi: Float,
      notifications: Boolean,
      status: String,
      coverImage: String
    }

    type Query {
      hello: String,
      getLoans: [ Loan ]
    }

    type Mutation {
      addLoan(input:LoanInput): Loan
    }
  `;
  
  // Provide resolver functions for your schema fields
  const resolvers = {
    Query: {
      hello: () => 'Hello world!',
      getLoans: async () => {
        const values = await db.collection('loans').find().toArray().then(res => { return res });
        return values
      }
    },
    Mutation: {
      addLoan: async (parent, { input }) => {
        const {
          name,
          loanAmount,
          paidAmount,
          emi,
          notifications,
          status,
          coverImage 
        } = input
        
        const result = await db.collection('loans').insertOne({
          name,
          loanAmount,
          paidAmount,
          emi,
          notifications,
          status,
          coverImage,
        });
        return result.ops[0];
      }
    }
  };
  const apolloServerNew = new ApolloServer({ typeDefs, resolvers, introspection: true, playground: true });
  return apolloServerNew;
}

module.exports = server