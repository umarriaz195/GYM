const cron = require('node-cron');
const member=require('./Models/member')


cron.schedule('* * * * *', () => {
   
    console.log('Running cron job...');
  });