const Trainer = require('../Models/trainer');

exports.addTrainer = async (req, res) => {
  const { name, email, phone, picture } = req.body;

  try {
    const trainer = new Trainer({
      name,
      email,
      phone,
      picture
    });

    await trainer.save();

    res.status(201).json({ message: 'Trainer added successfully' });
  } catch (error) {
    console.error('Error adding trainer:', error.message);
    res.status(500).json({ message: 'Failed to add trainer' });
  }
};
