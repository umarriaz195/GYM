const express = require('express');
const bodyParser = require('body-parser');
const connectToDatabase = require('./server');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
// const authRoutes = require('./routes/authRoutes');
// const memberRoutes = require('./routes/memberRoutes');
const attendanceRoutes=require('./routes/attendanceRoutes')
const trainerRoutes = require('./routes/trainer');



// app.use('/auth', authRoutes);
// app.use('/members', memberRoutes); 
app.use('/trainers', trainerRoutes); 
app.use('/attendance', attendanceRoutes)
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Connect to the database
connectToDatabase();


