const { ApolloServer, gql } = require('apollo-server-express');
 
// Retrieve
const MongoClient = require('mongodb').MongoClient;

// Connect to the db
let client;
try {
  client = new MongoClient(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  client.connect();
} catch(error){
  console.log('There is an Error Connecting to DB' + error);
} 
console.log('Successfully Connected to MongoDB')
const db = client.db();

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
  //   () => {
    
//     return [
// {
//   name: 'HDFC Bank',
//   loanAmount: 1002554,
//   paidAmount: 150000,
//   emi: 16101,
//   notifications: true,
//   status: 'In Progress',
//   coverImage: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
// },
//       {
//         name: 'HDFC Bank',
//         loanAmount: 1002554,
//         paidAmount: 150000,
//         emi: 16101,
//         notifications: true,
//         status: 'In Progress',
//         coverImage: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
//       }
//     ]
//   }
 
const server = new ApolloServer({ typeDefs, resolvers, introspection: true, playground: true });

module.exports = server;