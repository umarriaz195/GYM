const cron = require('node-cron');
const member=require('./Models/member')
const trainer=require('./Models/trainer')
const account=require('./Models/accounts')
const currentDate=new Date()

cron.schedule('* * * * *', async() => {//0 0 1 * *
  const myAccount=await account.findOne({});
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
await account.updateOne({},{
  
    $push:{monthlyRecord:{month:monthNames[currentDate.getMonth()-1],profit:myAccount.profitAmount,loss:myAccount.lossAmount}},
    $set:{profitAmount:0,lossAmount:0}

})
    console.log('Running cron job...');
  });
////////////////////////////
  cron.schedule('0 0 1 1 *',async()=>{
    await account.updateOne({},{
      $push:{yearlyRecord:{year:currentDate.getYear()-1,record:myAccount.monthlyRecord}},
      $set:{monthlyRecord:[]}
    })
  })