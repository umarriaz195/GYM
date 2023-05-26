import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';

const Modal = ({ open, onClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Trainer</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Contact"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Package"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Salary"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          {/* Add other input fields here */}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} style={{ color: 'red' }} >Cancel</Button>
          <Button type="submit" variant="contained" style={{ backgroundColor: '#00aaff' }}>
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default Modal;
