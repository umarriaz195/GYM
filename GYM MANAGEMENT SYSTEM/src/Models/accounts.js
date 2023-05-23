const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  balance: [
    {
      date: {
        type: Date,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
