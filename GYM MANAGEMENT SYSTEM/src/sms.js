const memberModel = require('./Models/member')
const cron = require('node-cron');
require('dotenv').config()
cron.schedule('* * * * *', async () => {
    const currentDate = new Date();
    const futureDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000 - 60 * 1000);
    const message = 'only one day left to pay your fees'
    const members = memberModel.find({
        monthlyFeeDate: {
            $gte: futureDate,
            $lt: new Date(futureDate.getTime() + 60 * 1000)
          }
        
    }, { phone: 1 })
    const phoneNumbers = []
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;

    const client = twilio(accountSid, authToken);
    async function sendSMS(message, phoneNumbers) {
        try {
            // Iterate over the phone numbers and send SMS to each one
            phoneNumbers.forEach((phoneNumber) => {
                client.messages
                    .create({
                        body: message,
                        from: '+12543584373',
                        to: phoneNumber,
                    })
                    .then(() => console.log(`SMS sent to ${phoneNumber}`))
                    .catch((error) => console.error(`Error sending SMS to ${phoneNumber}:`, error));
            });
        } catch (error) {
            console.error('Error sending SMS:', error);
            throw new Error('Error sending SMS');
        }
    }
    members.map((m) => {
        phoneNumbers.push(m.phone);
      });
      
    await sendSMS(message, phoneNumbers)

})
