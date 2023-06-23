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
const monthSchema = new mongoose.Schema({
  month: {
    type: String
  },
  profit: {
    type: Number,
    default: 0
  },
  loss: {
    type: Number,
    default: 0
  }
})
const yearlySchema = {
  year: {
    type: Number,
  },
  record: {
    type: Object
  }
}
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
  users: {
    type: Number,
    default: 0
  },
  // profitAmount: {
  //   type: Number,
  //   default: 0
  // },
  // lossAmount: {
  //   type: Number,
  //   default: 0
  // },
  monthlyRecord: [monthSchema],
  yearlyRecord: [yearlySchema]
});

transactionSchema.virtual('status').get(function () {
  return this.credit > this.debit ? "profit" : "loss";
});

transactionSchema.virtual('profitPercentage').get(function () {
  if (this.status === "profit") {
    const profitAmount = this.credit - this.debit;
    return (profitAmount / this.credit) * 100;
  } else {
    return 0;
  }
});

transactionSchema.virtual('lossPercentage').get(function () {
  if (this.status === "loss") {
    const lossAmount = this.debit - this.credit;
    return (lossAmount / this.debit) * 100;
  } else {
    return 0;
  }
});
transactionSchema.virtual('profitAmount').get(function () {
  if (this.status === "profit") {
    return this.credit - this.debit;
  } else {
    return 0;
  }
});

transactionSchema.virtual('lossAmount').get(function () {
  if (this.status === "loss") {
    return this.debit - this.credit;
  } else {
    return 0;
  }
});

module.exports = mongoose.model('Transaction', transactionSchema);


