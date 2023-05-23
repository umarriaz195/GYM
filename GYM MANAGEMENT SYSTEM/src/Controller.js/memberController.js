const Member = require('../Models/member');

const cron = require('node-cron');
const moment = require('moment-timezone');

// Create member


exports.createMember = async (req, res) => {
  try {
    const { name, fatherName, email, phone, picture, package, trainerId, isActive } = req.body;
    const currentDate = moment().tz('Asia/Karachi').format('YYYY-MM-DD'); // Replace 'YourTimezone' with your actual timezone
    const member = new Member({
      name,
      fatherName,
      email,
      phone,
      picture,
      package,
      trainer: {
        isTrainer: true,
        trainerId
      },
      joinDate: currentDate, // Set the join date to the current date in your timezone
      monthlyFeeDate: currentDate, // Set the initial monthly fee date as the join date in your timezone
      isActive // Set the active status from the request body
    });
    await member.save();
    res.status(200).json({ message: 'Member created successfully', member });
  } catch (error) {
    console.error('Error creating member:', error.message);
    res.status(500).json({ message: 'Failed to create member' });
  }
};

// Update the monthlyFeeDate on the 1st day of every month
cron.schedule('0 0 1 * *', async () => {
  try {
    console.log('Cron job started'); // Add this line to check if the cron job is running

    const members = await Member.find();
    for (const member of members) {
      member.monthlyFeeDate = moment().tz('Asia/Karachi').format('YYYY-MM-DD'); // Set the monthly fee date as the current date in your timezone
      await member.save();
    }

    console.log('Monthly fee dates updated successfully'); // Add this line to check if the monthly fee dates are updated
  } catch (error) {
    console.error('Error updating monthly fee dates:', error.message);
  }
});



  

// Rest of the code for other APIs...
exports.getAllMembers = async (req, res) => {
    try {
      const members = await Member.find();
      res.status(200).json({ members });
    } catch (error) {
      console.error('Error retrieving members:', error.message);
      res.status(500).json({ message: 'Failed to retrieve members' });
    }
  };
  
  // Read a specific member by ID
  exports.getMemberById = async (req, res) => {
    try {
      const { memberId } = req.params;
      const member = await Member.findById(memberId);
      if (!member) {
        return res.status(404).json({ message: 'Member not found' });
      }
      res.status(200).json({ member });
    } catch (error) {
      console.error('Error retrieving member:', error.message);
      res.status(500).json({ message: 'Failed to retrieve member' });
    }
  };
  
  // Update a member
  exports.updateMember = async (req, res) => {
    try {
      const { memberId } = req.params;
      const { name, fatherName, email, phone, picture, package, trainerId, isActive } = req.body;
      const member = await Member.findByIdAndUpdate(
        memberId,
        {
          name,
          fatherName,
          email,
          phone,
          picture,
          package,
          trainer: {
            isTrainer: true,
            trainerId
          },
          isActive // Update the active status from the request body
        },
        { new: true }
      );
      if (!member) {
        return res.status(404).json({ message: 'Member not found' });
      }
      res.status(200).json({ message: 'Member updated successfully', member });
    } catch (error) {
      console.error('Error updating member:', error.message);
      res.status(500).json({ message: 'Failed to update member' });
    }
  };
  
  // Delete member
  exports.deleteMember = async (req, res) => {
    try {
      const { memberId } = req.params;
      const member = await Member.findByIdAndDelete(memberId);
      if (!member) {
        return res.status(404).json({ message: 'Member not found' });
      }
      res.status(200).json({ message: 'Member deleted successfully' });
    } catch (error) {
      console.error('Error deleting member:', error.message);
      res.status(500).json({ message: 'Failed to delete member' });
    }
}




//check member paid his fees or not 
// Check if member has paid fees
// Check member payment status
exports.checkMonthlyFeeStatus = async (req, res) => {
  const { memberId } = req.body;

  try {
    const member = await Member.findById(memberId);

    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }

    const monthlyFeeStatus = member.monthlyFeeStatus || 'unpaid';

    res.status(200).json({ monthlyFeeStatus });
  } catch (error) {
    console.error('Error checking monthly fee status:', error.message);
    res.status(500).json({ message: 'Failed to check monthly fee status' });
  }
};


