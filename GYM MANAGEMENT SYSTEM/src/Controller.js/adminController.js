// controllers/feePaymentController.js
const Member = require('../Models/member');
const Admin=require('../Models/admin')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Account = require('../Models/accounts');
const Trainer = require('../Models/trainer')

const admin = require('firebase-admin');

// Initialize the Firebase Admin SDK
const serviceAccount = require('../Middleware/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Function to send a message to a specific contact number
const sendMessageToContact = (contactNumber, message) => {
  const messagePayload = {
    data: {
      message: message,
    },
    token: contactNumber,
  };

  admin.messaging().send(messagePayload)
    .then((response) => {
      console.log('Message sent successfully:', response);
    })
    .catch((error) => {
      console.error('Error sending message:', error);
    });
};

const getTrainersFromDatabase = async () => {
  try {
    const trainers = await Trainer.find().lean().exec();
    return trainers.map((trainer) => trainer.contactNumber);
  } catch (error) {
    console.error('Error retrieving trainers from the database:', error);
    return [];
  }
};

const getMembersFromDatabase = async () => {
  try {
    const members = await Member.find();
    return members.map((member) => member.contactNumber);
  } catch (error) {
    console.error('Error retrieving members from the database:', error);
    return [];
  }
};

// Send messages to trainers
const sendMessagesToTrainers = async () => {
  try {
    const trainers = await getTrainersFromDatabase();
    const message = 'Hello trainers, this is a message from the admin';

    trainers.forEach((trainer) => {
      sendMessageToContact(trainer, message);
    });
  } catch (error) {
    console.error('Error sending messages to trainers:', error);
  }
};

// Send messages to members
const sendMessagesToMembers = async () => {
  try {
    const members = await getMembersFromDatabase();
    const message = 'Hello members, this is a message from the admin';

    members.forEach((member) => {
      sendMessageToContact(member, message);
    });
  } catch (error) {
    console.error('Error sending messages to members:', error);
  }
};

// Call the functions to send messages
sendMessagesToTrainers();
sendMessagesToMembers();


















exports.addAdmin = async (req, res) => {
  try {
    const { name, email, password, contactNo, gender, registrationDate } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin object with hashed password
    const admin = new Admin({
      name,
      email,
      password: hashedPassword,
      contactNo,
      gender,
      registrationDate,
    });

    // Save the admin to the database
    await admin.save();

    res.status(200).json({ message: 'Admin created successfully' });
  } catch (error) {
    console.error('Error creating admin:', error.message);
    res.status(500).json({ message: 'Failed to create admin' });
  }
};





// Admin login
exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Validate the password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate and return an authentication token
    const token = jwt.sign({ _id: admin._id }, 'your-secret-key');
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in:', error.message);
    res.status(500).json({ message: 'Failed to login' });
  }
};




















//fee payment



exports.processFeePayment = async (req, res) => {
  const { memberId } = req.body;

  try {
    const member = await Member.findById(memberId);

    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }

    // Update the fee status to "paid"
    member.monthlyFeeStatus = true;

    // Update the monthly fee date to the next month
    const currentMonthlyFeeDate = new Date(member.monthlyFeeDate);
    const nextMonthlyFeeDate = new Date(
      currentMonthlyFeeDate.getFullYear(),
      currentMonthlyFeeDate.getMonth() + 1,
      currentMonthlyFeeDate.getDate()
    );
    member.monthlyFeeDate = nextMonthlyFeeDate.toISOString();

    // Save the updated member
    await member.save();

    // Find or create the company's account
    let account = await Account.findOne();
    if (!account) {
      account = new Account();
    }

    // Add the payment transaction to the company's accounts
    const paymentAmount = member.package; // Assuming the payment amount is equal to the member's package value
    account.balance.push({ amount: paymentAmount, date: new Date() });
    await account.save();

    res.status(200).json({ message: 'Fee payment processed successfully' });
  } catch (error) {
    console.error('Error processing fee payment:', error.message);
    res.status(500).json({ message: 'Failed to process fee payment' });
  }
};


  