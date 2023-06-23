const Trainer = require('../Models/trainer');
const attendanceModel=require('../Models/attendance')

// Create a new trainer
exports.addTrainer = async (req, res) => {
  const { name, email, phone, picture } = req.body;

  try {
    const trainer = new Trainer({
      name,
      email,
      phone,
      picture,
    });

    await trainer.save();

    res.status(201).json({ message: 'Trainer added successfully' });
  } catch (error) {
    console.error('Error adding trainer:', error.message);
    res.status(500).json({ message: 'Failed to add trainer' });
  }
};

// Get all trainers
exports.getAllTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.status(200).json(trainers);
  } catch (error) {
    console.error('Error getting trainers:', error.message);
    res.status(500).json({ message: 'Failed to get trainers' });
  }
};

// Get a single trainer by ID
exports.getTrainerById = async (req, res) => {
  const { id } = req.params;

  try {
    const trainer = await Trainer.findById(id);
    if (!trainer) {
      return res.status(404).json({ message: 'Trainer not found' });
    }
    res.status(200).json({ trainer });
  } catch (error) {
    console.error('Error getting trainer:', error.message);
    res.status(500).json({ message: 'Failed to get trainer' });
  }
};

// Update a trainer
exports.updateTrainer = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, picture } = req.body;

  try {
    const trainer = await Trainer.findByIdAndUpdate(
      id,
      { name, email, phone, picture },
      { new: true }
    );
    if (!trainer) {
      return res.status(404).json({ message: 'Trainer not found' });
    }
    res.status(200).json({ message: 'Trainer updated successfully', trainer });
  } catch (error) {
    console.error('Error updating trainer:', error.message);
    res.status(500).json({ message: 'Failed to update trainer' });
  }
};

// Delete a trainer
exports.deleteTrainer = async (req, res) => {
  const { id } = req.params;

  try {
    const trainer = await Trainer.findByIdAndDelete(id);
    if (!trainer) {
      return res.status(404).json({ message: 'Trainer not found' });
    }
    res.status(200).json({ message: 'Trainer deleted successfully' });
  } catch (error) {
    console.error('Error deleting trainer:', error.message);
    res.status(500).json({ message: 'Failed to delete trainer' });
  }
};

exports.getAttendence=async(req,res)=>{
  try{
    const attendance=await attendanceModel.findOne({trainerId:req.params.id})
 res.status(200).json(attendance)
}catch(e){
  res.status(500).json(e)
    console.log(e)
  }
}