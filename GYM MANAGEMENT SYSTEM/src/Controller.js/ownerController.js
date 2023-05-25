const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Owner = require('../Models/owner');
const Account=require('../Models/accounts')
exports.ownerSignup = async (req, res) => {
  const { name, email, password ,contactNo , } = req.body;

  try {
    // Check if the email is already registered
    const existingOwner = await Owner.findOne({ email });
    if (existingOwner) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new owner
    const owner = new Owner({
      name,
      email,
      password: hashedPassword,
      contactNo,
    });

    // Save the owner in the database
    await owner.save();

    res.status(201).json({ message: 'Owner registered successfully' });
  } catch (error) {
    console.error('Error signing up:', error.message);
    res.status(500).json({ message: 'Failed to register owner' });
  }
};


exports.ownerLogin = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if the owner exists
      const owner = await Owner.findOne({ email });
      if (!owner) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Validate the password
      const isMatch = await bcrypt.compare(password, owner.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Generate and return an authentication token
      const token = jwt.sign({ _id: owner._id }, 'your-secret-key');
      res.status(200).json({ token });
    } catch (error) {
      console.error('Error logging in:', error.message);
      res.status(500).json({ message: 'Failed to login' });
    }
  };
  
//
exports.createAccount=async(req,res)=>{
try{
  await Account.create({balance:10})
  res.status(200).json("success")
}catch(e){
  res.status(500).json(e)
}
}

exports.dashboard=async(req,res)=>{
  try{
const account=await Account.findOne()
const credits=account.record.filter((x)=>x.type==="credit")
const debits=account.record.filter((x)=>x.type==="debit")
const payload={
  balance:account.balance,
  creditRecord:credits,
  debitRecord:debits,
  status:account.status,
  profit:account.profitPercentage,
  loss:account.lossPercentage
}
  res.status(200).json(payload)
}catch(e){
    res.status(500).json(e)
    console.log(e)
  }
}