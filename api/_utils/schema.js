const { gql } = require('apollo-server-express');
// Construct a schema, using GraphQL schema language
module.exports = gql`
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