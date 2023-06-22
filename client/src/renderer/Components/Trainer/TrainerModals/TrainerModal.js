import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';
import axios from 'axios';

const Modal = ({ open, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setphone] = useState('');
  // const [package, setPackage] = useState('');
  const [salary, setSalary] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform form submission logic here
    try {
      const response = await axios.post('http://localhost:7000/trainers/add', {
        name:fullName,
        email,
        phone,
        // package,
        salary:salary,
        
      });
      console.log(response)
      // Handle response if needed
    } catch (e) {
      console.log(e);
    }
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
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="phone"
            variant="outlined"
            fullWidth
            margin="normal"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />
          <TextField
            label="Package"
            variant="outlined"
            fullWidth
            margin="normal"
            // value={package}
            // onChange={(e) => setPackage(e.target.value)}
          />
          <TextField
            label="Salary"
            variant="outlined"
            fullWidth
            margin="normal"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          {/* Add other input fields here */}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} style={{ color: 'red' }}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            style={{ backgroundColor: '#00aaff' }}
          >
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default Modal;
