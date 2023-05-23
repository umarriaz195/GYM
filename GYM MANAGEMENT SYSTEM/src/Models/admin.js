const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  registrationDate: {
    type: String,
    default: () => new Date().toISOString().split('T')[0], // Save date in 'YYYY-MM-DD' format
  },
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
