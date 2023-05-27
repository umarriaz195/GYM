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

const CalendarModal = ({ open, onClose,data }) => {
  const attend=data
  const [selectedDate, setSelectedDate] = useState(new Date());
  const trainerData = [ ];
  for(const x of attend.attendance){
    const timeCheckIn=new Date(x.checkInTime)
    const timeCheckOut=new Date(x.checkOutTime)
  
    console.log('attendece',timeCheckIn.getDate())
   trainerData.push( {
    date: new Date(timeCheckIn.getFullYear(), timeCheckIn.getMonth(), timeCheckIn.getDate()),
    present: true,
    checkInTime: timeCheckIn.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
    checkOutTime: timeCheckOut.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
  })
  }
// console.log('trainers DATA')

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
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
              <p style={{ fontSize: '1.3rem' }}>{trainerData.selectedDate}</p>
              <div >Check-in Time: {trainerData.selectedDate.checkInTime || 'N/A'}</div>
              <div>Check-out Time: {trainerData.selectedDate.checkOutTime || 'N/A'}</div>
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
