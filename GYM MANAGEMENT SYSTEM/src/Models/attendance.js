// const mongoose = require('mongoose');

// const attendanceSchema = new mongoose.Schema({
//   day: {
//     type: Number,
//     required: true,
//   },
//   checkInTime: {
//     type: Date,
//     required: true,
//   },
//   checkOutTime: {
//     type: Date,
//   },
// });

// const trainerAttendanceSchema = new mongoose.Schema({
//   trainerId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Trainer',
//     required: true,
//   },
//   attendance: [
//     {
//       month: {
//         type: String,
//         required: true,
//       },
//       year: {
//         type: Number,
//         required: true,
//       },
//       days: [attendanceSchema],
//     },
//   ],
// });

// const TrainerAttendance = mongoose.model('TrainerAttendance', trainerAttendanceSchema);

// module.exports = TrainerAttendance;






///editef
const mongoose = require('mongoose');

const trainerAttendanceSchema = new mongoose.Schema({
  trainerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trainer',
    required: true,
  },
  attendance: [
    {
      year: {
        type: Number,
        required: true,
      },
      months: [
        {
          month: {
            type: String,
            required: true,
          },
          days: [
            {
              day: {
                type: Number,
                required: true,
              },
              checkInTime: {
                type: Date,
                required: true,
              },
              checkOutTime: {
                type: Date,
              },
            },
          ],
        },
      ],
    },
  ],
});

const TrainerAttendance = mongoose.model('TrainerAttendance', trainerAttendanceSchema);

module.exports = TrainerAttendance;
