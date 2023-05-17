const TrainerAttendance = require('../Models/attendance');





// ///////previous
// exports.recordAttendance = async (req, res) => {
//   const { trainerId, checkInTime } = req.body;
//   const currentDate = new Date(checkInTime);
//   const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
//   const currentYear = currentDate.getFullYear();
//   const currentDay = currentDate.getDate();

//   try {
//     let attendance = await TrainerAttendance.findOne({ trainerId });

//     if (!attendance) {
//       attendance = new TrainerAttendance({
//         trainerId,
//         attendance: [],
//       });
//     }

//     let currentMonthAttendance = attendance.attendance.find(
//       (monthAttendance) => monthAttendance.month === currentMonth && monthAttendance.year === currentYear
//     );

//     if (!currentMonthAttendance) {
//       currentMonthAttendance = {
//         month: currentMonth,
//         year: currentYear,
//         days: [],
//       };
//       attendance.attendance.push(currentMonthAttendance);
//     }

//     const currentDayAttendance = currentMonthAttendance.days.find(
//       (dayAttendance) => dayAttendance.day === currentDay
//     );

//     if (!currentDayAttendance) {
//       currentMonthAttendance.days.push({
//         day: currentDay,
//         checkInTime: currentDate.toISOString(), // Use ISO format for date
//       });
//     } else {
//       currentDayAttendance.checkInTime = currentDate.toISOString(); // Use ISO format for date
//     }

//     await attendance.save();

//     res.status(200).json({ message: 'Attendance recorded successfully' });
//   } catch (error) {
//     console.error('Error recording attendance:', error.message);
//     res.status(500).json({ message: 'Failed to record attendance' });
//   }
// };

// ////previous
// exports.updateAttendance = async (req, res) => {
//   const { trainerId, checkInTime, checkOutTime } = req.body;
//   const currentDate = new Date();
//   const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
//   const currentYear = currentDate.getFullYear();
//   const currentDay = currentDate.getDate();

//   try {
//     let attendance = await TrainerAttendance.findOne({ trainerId });

//     if (!attendance) {
//       attendance = new TrainerAttendance({
//         trainerId,
//         attendance: [],
//       });
//     }

//     let currentMonthAttendance = attendance.attendance.find(
//       (monthAttendance) => monthAttendance.month === currentMonth && monthAttendance.year === currentYear
//     );

//     if (!currentMonthAttendance) {
//       currentMonthAttendance = {
//         month: currentMonth,
//         year: currentYear,
//         days: [],
//       };
//       attendance.attendance.push(currentMonthAttendance);
//     }

//     const currentDayAttendance = currentMonthAttendance.days.find(
//       (dayAttendance) => dayAttendance.day === currentDay
//     );

//     if (!currentDayAttendance) {
//       currentMonthAttendance.days.push({
//         day: currentDay,
//         checkInTime,
//         checkOutTime,
//       });
//     } else {
//       if (currentDayAttendance.checkOutTime) {
//         // If check-out time already exists, create a new attendance record for the day
//         currentMonthAttendance.days.push({
//           day: currentDay,
//           checkInTime,
//           checkOutTime,
//         });
//       } else {
//         // Update the existing check-out time for the day
//         currentDayAttendance.checkOutTime = checkOutTime;
//       }
//     }

//     await attendance.save();

//     res.status(200).json({ message: 'Attendance updated successfully' });
//   } catch (error) {
//     console.error('Error updating attendance:', error.message);
//     res.status(500).json({ message: 'Failed to update attendance' });
//   }
// };




// edited
// exports.recordAttendance = async (req, res) => {
//   const { trainerId, checkInTime } = req.body;
//   const currentDate = new Date(checkInTime);
//   const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
//   const currentYear = currentDate.getFullYear();
//   const currentDay = currentDate.getDate();

//   try {
//     let attendance = await TrainerAttendance.findOne({ trainerId });

//     if (!attendance) {
//       attendance = new TrainerAttendance({
//         trainerId,
//         attendance: [],
//       });
//     }

//     let currentYearAttendance = attendance.attendance.find(
//       (yearAttendance) => yearAttendance.year === currentYear
//     );

//     if (!currentYearAttendance) {
//       currentYearAttendance = {
//         year: currentYear,
//         months: [],
//       };
//       attendance.attendance.push(currentYearAttendance);
//     }

//     let currentMonthAttendance = currentYearAttendance.months.find(
//       (monthAttendance) => monthAttendance.month === currentMonth
//     );

//     if (!currentMonthAttendance) {
//       currentMonthAttendance = {
//         month: currentMonth,
//         days: [],
//       };
//       currentYearAttendance.months.push(currentMonthAttendance);
//     }

//     const currentDayAttendance = currentMonthAttendance.days.find(
//       (dayAttendance) => dayAttendance.day === currentDay
//     );

//     if (!currentDayAttendance) {
//       currentMonthAttendance.days.push({
//         day: currentDay,
//         checkInTime: currentDate.toISOString(), // Use ISO format for date
//       });
//     } else {
//       currentDayAttendance.checkInTime = currentDate.toISOString(); // Use ISO format for date
//     }

//     await attendance.save();

//     res.status(200).json({ message: 'Attendance recorded successfully' });
//   } catch (error) {
//     console.error('Error recording attendance:', error.message);
//     res.status(500).json({ message: 'Failed to record attendance' });
//   }
// };


////edited

// exports.updateAttendance = async (req, res) => {
//   const { trainerId, checkInTime, checkOutTime } = req.body;
//   const currentDate = new Date(checkOutTime); // Use the check-out time provided in the request
//   const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
//   const currentYear = currentDate.getFullYear();
//   const currentDay = currentDate.getDate();

//   try {
//     let attendance = await TrainerAttendance.findOne({ trainerId });

//     if (!attendance) {
//       attendance = new TrainerAttendance({
//         trainerId,
//         attendance: [],
//       });
//     }

//     let currentYearAttendance = attendance.attendance.find(
//       (yearAttendance) => yearAttendance.year === currentYear
//     );

//     if (!currentYearAttendance) {
//       currentYearAttendance = {
//         year: currentYear,
//         months: [],
//       };
//       attendance.attendance.push(currentYearAttendance);
//     }

//     let currentMonthAttendance = currentYearAttendance.months.find(
//       (monthAttendance) => monthAttendance.month === currentMonth
//     );

//     if (!currentMonthAttendance) {
//       currentMonthAttendance = {
//         month: currentMonth,
//         days: [],
//       };
//       currentYearAttendance.months.push(currentMonthAttendance);
//     }

//     const currentDayAttendance = currentMonthAttendance.days.find(
//       (dayAttendance) => dayAttendance.day === currentDay
//     );

//     if (!currentDayAttendance) {
//       currentMonthAttendance.days.push({
//         day: currentDay,
//         checkInTime: checkInTime,
//         checkOutTime: currentDate.toISOString(),
//       });
//     } else {
//       if (currentDayAttendance.checkOutTime) {
//         // If check-out time already exists, create a new attendance record for the day
//         currentMonthAttendance.days.push({
//           day: currentDay,
//           checkInTime: checkInTime,
//           checkOutTime: currentDate.toISOString(),
//         });
//       } else {
//         // Update the existing check-out time for the day
//         currentDayAttendance.checkOutTime = currentDate.toISOString();
//       }
//     }

//     await attendance.save();

//     res.status(200).json({ message: 'Attendance updated successfully' });
//   } catch (error) {
//     console.error('Error updating attendance:', error.message);
//     res.status(500).json({ message: 'Failed to update attendance' });
//   }
// };



///

exports.recordAttendance = async (req, res) => {
  const { trainerId, checkInTime } = req.body;
  const currentDate = new Date(checkInTime);
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();

  try {
    let attendance = await TrainerAttendance.findOne({ trainerId });

    if (!attendance) {
      attendance = new TrainerAttendance({
        trainerId,
        attendance: [],
      });
    }

    let currentYearAttendance = attendance.attendance.find(
      (yearAttendance) => yearAttendance.year === currentYear
    );

    if (!currentYearAttendance) {
      currentYearAttendance = {
        year: currentYear,
        months: [],
      };
      attendance.attendance.push(currentYearAttendance);
    }

    let currentMonthAttendance = currentYearAttendance.months.find(
      (monthAttendance) => monthAttendance.month === currentMonth
    );

    if (!currentMonthAttendance) {
      currentMonthAttendance = {
        month: currentMonth,
        days: [],
      };
      currentYearAttendance.months.push(currentMonthAttendance);
    }

    let currentDayAttendance = currentMonthAttendance.days.find(
      (dayAttendance) => dayAttendance.day === currentDay
    );

    if (!currentDayAttendance) {
      currentDayAttendance = {
        day: currentDay,
        checkInTime: currentDate.toISOString(),
      };
      currentMonthAttendance.days.push(currentDayAttendance);
    } else {
      currentDayAttendance.checkInTime = currentDate.toISOString();
    }

    await attendance.save();

    res.status(200).json({ message: 'Attendance recorded successfully' });
  } catch (error) {
    console.error('Error recording attendance:', error.message);
    res.status(500).json({ message: 'Failed to record attendance' });
  }
};



//
exports.updateAttendance = async (req, res) => {
  const { trainerId, checkOutTime } = req.body;
  const currentDate = new Date(checkOutTime);
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();

  try {
    let attendance = await TrainerAttendance.findOne({ trainerId });

    if (!attendance) {
      return res.status(404).json({ message: 'Attendance not found' });
    }

    let currentYearAttendance = attendance.attendance.find(
      (yearAttendance) => yearAttendance.year === currentYear
    );

    if (!currentYearAttendance) {
      return res.status(404).json({ message: 'Attendance not found' });
    }

    let currentMonthAttendance = currentYearAttendance.months.find(
      (monthAttendance) => monthAttendance.month === currentMonth
    );

    if (!currentMonthAttendance) {
      return res.status(404).json({ message: 'Attendance not found' });
    }

    let currentDayAttendance = currentMonthAttendance.days.find(
      (dayAttendance) => dayAttendance.day === currentDay
    );

    if (!currentDayAttendance) {
      return res.status(404).json({ message: 'Attendance not found' });
    }

    currentDayAttendance.checkOutTime = currentDate.toISOString();

    await attendance.save();

    res.status(200).json({ message: 'Attendance updated successfully' });
  } catch (error) {
    console.error('Error updating attendance:', error.message);
    res.status(500).json({ message: 'Failed to update attendance' });
  }
};
