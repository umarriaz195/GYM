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

// Custom styles for the calendar
const CustomCalendar = styled(Calendar)(({ theme }) => ({
  width: '100%',
  maxWidth: '400px',
  marginTop: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  '& .react-calendar__tile': {
    background: '#f0f0f0',
    color: '#333',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  '& .react-calendar__tile--active': {
    background: '#00aaff',
    color: '#fff',
  },
  '& .react-calendar__tile--now': {
    background: '#fff',
    color: '#00aaff',
    fontWeight: 'bold',
  },
}));


const CalendarModal = ({ open, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalContent>
          <TextField
            value={selectedDate.toDateString()}
            variant="outlined"
            disabled
            fullWidth
          />
          <CustomCalendar
            onChange={handleDateChange}
            value={selectedDate}
            calendarType="US"
            tileClassName="calendar-tile"
          />
          <div style={{ position: 'absolute', top: 25, right: 25, cursor: 'pointer' }} onClick={onClose}>
            <CloseRoundedIcon style={{ color: 'red', transition: 'color 0.3s' }} className="close-icon" />
          </div>
        </ModalContent>
        <DialogActions>
          <Button onClick={onClose} style={{ color: '' }}>Cancel</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CalendarModal;
