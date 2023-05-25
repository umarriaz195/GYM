// controllers/feePaymentController.js
const Member = require('../Models/member');
const Admin = require('../Models/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Account = require('../Models/accounts');
const twilio = require('twilio');
const Trainer = require('../Models/trainer');
require('dotenv').config();






exports.checkMonthlyFeeStatus = async (req, res) => {
  try {
    const members = await Member.find({ monthlyFeeStatus: false });

    res.json(members);
  } catch (error) {
    console.error('Error checking monthly fee status:', error);
    res.status(500).send('Error checking monthly fee status');
  }
};


// ...

// exports.sendmessage = async (req, res) => {
//   try {
//     const { message, collection } = req.body;

//     // Retrieve Twilio account SID and auth token from environment variables
//     const accountSid = process.env.TWILIO_ACCOUNT_SID;
//     const authToken = process.env.TWILIO_AUTH_TOKEN;

//     // Create a new Twilio client
//     const client = twilio(accountSid, authToken);

//     // Function to send SMS to the given recipients
//     async function sendSMS(message, phoneNumbers) {
//       try {
//         // Iterate over the phone numbers and send SMS to each one
//         phoneNumbers.forEach((phoneNumber) => {
//           client.messages
//             .create({
//               body: message,
//               from: '+12543584373',
//               to: phoneNumber,
//             })
//             .then(() => console.log(`SMS sent to ${phoneNumber}`))
//             .catch((error) => console.error(`Error sending SMS to ${phoneNumber}:`, error));
//         });
//       } catch (error) {
//         console.error('Error sending SMS:', error);
//         throw new Error('Error sending SMS');
//       }
//     }

//     // Fetch phone numbers from the specified collection
//     let phoneNumbers = [];
//     if (collection === 'trainers') {
//       const trainers = await Trainer.find({}, 'phone');
//       phoneNumbers = trainers.map(({ phone }) => phone);
//     } else if (collection === 'members') {
//       const members = await Member.find({}, 'phone');
//       phoneNumbers = members.map(({ phone }) => phone);
//     } else {
//       throw new Error('Invalid collection');
//     }

//     // Call the sendSMS function to send the SMS messages
//     await sendSMS(message, phoneNumbers);

//     res.send('SMS sent successfully');
//   } catch (error) {
//     console.error('Error sending SMS:', error);
//     res.status(500).send('Error sending SMS');
//   }
// };


//
// exports.sendmessage = async (req, res) => {
//   try {
//     const { message, collection } = req.body;

//     // Your Twilio account SID and auth token
//     const accountSid = 'AC4fe782104d6e1251fbe247c7b7c7b434';
//     const authToken = '9d2ea87051d7d5af87fd6c86b33c9e10';

//     // Create a new Twilio client
//     const client = twilio(accountSid, authToken);

//     // Function to send SMS to the given recipients
//     async function sendSMS(message, phoneNumbers) {
//       try {
//         // Iterate over the phone numbers and send SMS to each one
//         phoneNumbers.forEach((phoneNumber) => {
//           client.messages
//             .create({
//               body: message,
//               from: '+12543584373',
//               to: phoneNumber,
//             })
//             .then(() => console.log(`SMS sent to ${phoneNumber}`))
//             .catch((error) => console.error(`Error sending SMS to ${phoneNumber}:`, error));
//         });
//       } catch (error) {
//         console.error('Error sending SMS:', error);
//         throw new Error('Error sending SMS');
//       }
//     }

//     // Fetch phone numbers from the specified collection
//     let phoneNumbers = [];
//     if (collection === 'trainers') {
//       const trainers = await Trainer.find({}, 'phone');
//       phoneNumbers = trainers.map(({ phone }) => phone);
//     } else if (collection === 'members') {
//       const members = await Member.find({}, 'phone');
//       phoneNumbers = members.map(({ phone }) => phone);
//     } else {
//       throw new Error('Invalid collection');
//     }

//     // Call the sendSMS function to send the SMS messages
//     await sendSMS(message, phoneNumbers);

//     res.send('SMS sent successfully');
//   } catch (error) {
//     console.error('Error sending SMS:', error);
//     res.status(500).send('Error sending SMS');
//   }
// };

//toalllllll

exports.sendmessage = async (req, res) => {
  try {
    const { message, recipients } = req.body;

    // Retrieve Twilio account SID and auth token from environment variables
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;

    // Create a new Twilio client
    const client = twilio(accountSid, authToken);

    // Function to send SMS to the given recipients
    async function sendSMS(message, phoneNumbers) {
      try {
        // Iterate over the phone numbers and send SMS to each one
        phoneNumbers.forEach((phoneNumber) => {
          client.messages
            .create({
              body: message,
              from: '+12543584373',
              to: phoneNumber,
            })
            .then(() => console.log(`SMS sent to ${phoneNumber}`))
            .catch((error) => console.error(`Error sending SMS to ${phoneNumber}:`, error));
        });
      } catch (error) {
        console.error('Error sending SMS:', error);
        throw new Error('Error sending SMS');
      }
    }

    // Fetch phone numbers from the specified recipients
    let phoneNumbers = [];
    for (const recipient of recipients) {
      if (recipient.collection === 'trainers') {
        const trainers = await Trainer.find({}, 'phone');
        phoneNumbers.push(...trainers.map(({ phone }) => phone));
      } else if (recipient.collection === 'members') {
        const members = await Member.find({}, 'phone');
        phoneNumbers.push(...members.map(({ phone }) => phone));
      } else if (recipient.collection === 'specificMember') {
        const member = await Member.findById(recipient.id, 'phone');
        if (member) {
          phoneNumbers.push(member.phone);
        } else {
          throw new Error('Member not found');
        }
      } else if (recipient.collection === 'specificTrainer') {
        const trainer = await Trainer.findById(recipient.id, 'phone');
        if (trainer) {
          phoneNumbers.push(trainer.phone);
        } else {
          throw new Error('Trainer not found');
        }
      } else {
        throw new Error('Invalid collection');
      }
    }

    // Call the sendSMS function to send the SMS messages
    await sendSMS(message, phoneNumbers);

    res.send('SMS sent successfully');
  } catch (error) {
    console.error('Error sending SMS:', error);
    res.status(500).send('Error sending SMS');
  }
};



// // Import the Twilio module
// const twilio = require('twilio');

// // Your Twilio account SID and auth token
// const accountSid = 'AC4fe782104d6e1251fbe247c7b7c7b434';
// const authToken = '9d2ea87051d7d5af87fd6c86b33c9e10';

// // Create a new Twilio client
// const client = new twilio(accountSid, authToken);

// // Function to send an SMS message
// function sendSMS(phoneNumber, message) {
//   client.messages
//     .create({
//       body: message,
//       from: '+12543584373',
//       to: phoneNumber,
//     })
//     .then((message) => console.log('SMS sent:', message.sid))
//     .catch((error) => console.error('Error sending SMS:', error));
// }

// // Usage example
// const phoneNumber = '+923342347409'; // Replace with the target phone number
// const message = 'Hello, this is a test message.'; // Replace with your desired message

// sendSMS(phoneNumber, message);














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


  