import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  styled,
} from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import EventIcon from '@mui/icons-material/Event';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// Custom styles for the modal
const ModalContent = styled(DialogContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px',
}));

// Custom styles for the Calendar
const CustomCalendar = styled(Calendar)(({ theme }) => ({
  width: '100%',
  maxWidth: '400px',
  marginTop: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',

  '& .react-calendar__tile': {
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    background: '#f0f0f0',
    '&:hover': {
      background: 'gray',
      cursor: 'pointer',
    },
    '&.react-calendar__tile--clicked': {
      cursor: 'pointer',
    },
  },
  '& .react-calendar__tile--present': {
    background: 'green',
    '&:hover': {
      background: 'darkgreen',
    },
    '&.react-calendar__tile--clicked': {
      background: 'darkgreen',
    },
  },
  '& .react-calendar__tile--absent': {
    background: 'red',
    '&:hover': {
      background: 'darkred',
    },
    '&.react-calendar__tile--clicked': {
      background: 'darkred',
    },
  },
}));

const CalendarModal = ({ open, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [trainerData] = useState([
    {
      date: new Date(2023, 4, 12),
      present: true,
      checkInTime: '10:00 AM',
      checkOutTime: '5:00 PM',
    },
    {
      date: new Date(2023, 4, 16),
      present: false,
      checkInTime: '',
      checkOutTime: '',
    },
    {
      date: new Date(2023, 4, 1),
      present: true,
      checkInTime: '9:00 AM',
      checkOutTime: '6:00 PM',
    },
    {
      date: new Date(2023, 4, 3),
      present: false,
      checkInTime: '',
      checkOutTime: '',
    },
    {
      date: new Date(2023, 4, 2),
      present: true,
      checkInTime: '8:00 AM',
      checkOutTime: '4:00 PM',
    },
    {
      date: new Date(2023, 4, 7),
      present: false,
      checkInTime: '',
      checkOutTime: '',
    },
    {
      date: new Date(2023, 4, 22),
      present: true,
      checkInTime: '9:30 AM',
      checkOutTime: '5:30 PM',
    },
    // Add more data for different dates here
  ]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleClose = () => {
    setSelectedDate(null);
    onClose();
  };

  const [showDetail, setShowDetail] = useState(false);

  const handleTileClick = (date) => {
    setSelectedDate(date);
    setShowDetail(true);
  };

  const handleDetailClose = () => {
    setShowDetail(false);
  };

  const getTileClassName = (date) => {
    const trainer = trainerData.find(
      (item) => item.date.toDateString() === date.toDateString()
    );
    if (trainer) {
      return trainer.present
        ? 'react-calendar__tile--present'
        : 'react-calendar__tile--absent';
    }
    return '';
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <form onSubmit={handleSubmit}>
          <ModalContent>
            <div style={{ marginTop: '20px', display: 'flex' }}>
              <CustomCalendar
                onChange={handleDateChange}
                value={selectedDate}
                calendarType="US"
                tileClassName={({ date, view }) =>
                  view === 'month' && getTileClassName(date)
                }
                onClickDay={handleTileClick}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                top: 15,
                right: 15,
                cursor: 'pointer',
              }}
              onClick={onClose}
            >
              <CloseRoundedIcon
                style={{ color: 'red', transition: 'color 0.3s' }}
                className="close-icon"
              />
            </div>
          </ModalContent>
          {showDetail && (
            <div
              style={{
         
               display: 'flex',
               flexDirection: 'column',
                alignItems: 'center',
                color: 'gray',
                fontSize: '1.1rem'

              }}
            >
              <p style={{ fontSize: '1.3rem' }}>{selectedDate.toDateString()}</p>
              <div >Check-in Time: {selectedDate.checkInTime || 'N/A'}</div>
              <div>Check-out Time: {selectedDate.checkOutTime || 'N/A'}</div>
            </div>
          )}
          <DialogActions>
            <Button onClick={onClose} style={{ color: '' }}>
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default CalendarModal;
