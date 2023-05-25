const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  source: {
    type: String
  },
  amount: {
    type: Number
  },
  type: {
    type: String
  }
});

const transactionSchema = new mongoose.Schema({
  balance: {
    type: Number,
    default: 0
  },
  record: [recordSchema],
  credit: {
    type: Number
  },
  debit: {
    type: Number
  },
  users:{
    type:Number,
    default:0
  }
});

transactionSchema.virtual('status').get(function() {
  return this.credit > this.debit ? "profit" : "loss";
});

transactionSchema.virtual('profitPercentage').get(function() {
  if (this.status === "profit") {
    const profitAmount = this.credit - this.debit;
    return (profitAmount / this.credit) * 100;
  } else {
    return 0;
  }
});

transactionSchema.virtual('lossPercentage').get(function() {
  if (this.status === "loss") {
    const lossAmount = this.debit - this.credit;
    return (lossAmount / this.debit) * 100;
  } else {
    return 0;
  }
});

module.exports=mongoose.model('Transaction', transactionSchema);


