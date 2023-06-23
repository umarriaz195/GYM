const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
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
  }
});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;
