const express = require('express');
const bodyParser = require('body-parser');
const connectToDatabase = require('./server');


// ////
// const admin = require('firebase-admin');

// // Initialize the Firebase Admin SDK
// const serviceAccount = require('./Middleware/serviceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });
// const db = admin.firestore();
// ///




const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
// const authRoutes = require('./routes/authRoutes');
// const memberRoutes = require('./routes/memberRoutes');
const attendanceRoutes=require('./routes/attendanceRoutes')
const trainerRoutes = require('./routes/trainer');
const memberRoutes=require('./routes/memberRoutes')
const feePaymentRoutes=require ('./routes/adminRoutes')
const adminRoutes=require('./routes/adminRoutes')
const ownerRoutes=require('./routes/ownerRoutes')

// app.use('/auth', authRoutes);
// app.use('/members', memberRoutes); 
app.use('/trainers', trainerRoutes); 
app.use('/attendance', attendanceRoutes);
app.use('/member', memberRoutes)
app.use('/admin', feePaymentRoutes);
app.use('/admin',adminRoutes)
app.use('/owner',ownerRoutes)
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Connect to the database
connectToDatabase();


