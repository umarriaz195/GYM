import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import EventIcon from '@mui/icons-material/Event';

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
      <DialogTitle>Select Date</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            value={selectedDate.toDateString()}
            variant="outlined"
            InputProps={{
              endAdornment: <EventIcon color="action" />,
            }}
            disabled
            fullWidth
            margin="normal"
          />
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} style={{ color: 'red' }}>Cancel</Button>
          <Button type="submit" variant="contained" style={{ backgroundColor: '#00aaff' }}>
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CalendarModal;
