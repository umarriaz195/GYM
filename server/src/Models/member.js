const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  package: {
    type: Number,
    required: true,
  },
  trainer: {
    isTrainer: {
      type: Boolean,
      default: false,
    },
    trainerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Trainer',
      required: function () {
        return this.trainer.isTrainer;
      },
    },
  },
  joinDate: {
    type: String,
    default: function () {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
      return formattedDate;
    },
  },
  monthlyFeeDate: {
    type: String,
    default: function () {
      return this.joinDate;
    },
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  monthlyFeeStatus: {
    type: Boolean,
    default: false,
  },
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
