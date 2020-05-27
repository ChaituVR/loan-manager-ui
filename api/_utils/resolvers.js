// Provide resolver functions for your schema fields
module.exports = (db) => ({
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
});