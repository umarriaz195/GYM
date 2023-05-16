
const express = require('express');
const bodyParser = require('body-parser');


require('dotenv').config();
connectToDatabase();




const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const memberRoutes = require('./routes/memberRoutes');
const trainerRoutes = require('./routes/trainer');

app.use('/auth', authRoutes);
app.use('/members', memberRoutes); 
app.use('/trainers', trainerRoutes); 


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



