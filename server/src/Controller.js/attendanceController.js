const TrainerAttendance = require('../Models/attendance');



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

    let yearIndex = attendance.attendance.findIndex(
      (yearAttendance) => yearAttendance.year === currentYear
    );

    if (yearIndex === -1) {
      attendance.attendance.push({
        year: currentYear,
        months: [],
      });
      yearIndex = attendance.attendance.length - 1;
    }

    let monthIndex = attendance.attendance[yearIndex].months.findIndex(
      (monthAttendance) => monthAttendance.month === currentMonth
    );

    if (monthIndex === -1) {
      attendance.attendance[yearIndex].months.push({
        month: currentMonth,
        days: [],
      });
      monthIndex = attendance.attendance[yearIndex].months.length - 1;
    }



    let currentDayAttendance = attendance.attendance[yearIndex].months[monthIndex].days.find(
      (dayAttendance) => dayAttendance.day === currentDay
    );



    if (!currentDayAttendance) {
      currentDayAttendance = {
        day: currentDay,
        checkInTime: currentDate,
      };
      attendance.attendance[yearIndex].months[monthIndex].days.push(currentDayAttendance);
    }

    await attendance.save();

    res.status(200).json({ message: 'Attendance recorded successfully' });
  } catch (error) {
    console.error('Error recording attendance:', error.message);
    res.status(500).json({ message: 'Failed to record attendance' });
  }
};


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
