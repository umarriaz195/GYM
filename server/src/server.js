const mongoose = require('mongoose');
require('dotenv').config();

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://abdulwaseyabdulaziz:9ndNS8WiKjbnJrYh@wasey.zjfxp0g.mongodb.net/gym', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
