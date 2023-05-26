const express = require('express');
const bodyParser = require('body-parser');
const connectToDatabase = require('./server');
const cors = require('cors');

// require('./check')
const app = express();
app.use(cors());



// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes
const attendanceRoutes=require('./routes/attendanceRoutes')
const trainerRoutes = require('./routes/trainer');
const memberRoutes=require('./routes/memberRoutes')
const feePaymentRoutes=require ('./routes/adminRoutes')
const adminRoutes=require('./routes/adminRoutes')
const ownerRoutes=require('./routes/ownerRoutes')


app.use('/trainers', trainerRoutes); 
app.use('/attendance', attendanceRoutes);
app.use('/member', memberRoutes)
app.use('/admin', feePaymentRoutes);
app.use('/admin',adminRoutes)
app.use('/owner',ownerRoutes)


const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


connectToDatabase();



