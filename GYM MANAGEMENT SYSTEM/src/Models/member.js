const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  fatherName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  package: {
    type: String,
    required: true
  },
  trainer: {
    isTrainer: {
      type: Boolean,
      default: false
    },
    trainerName: {
      type: String,
      required: function () {
        return this.trainer.isTrainer;
      }
    }
  }
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
