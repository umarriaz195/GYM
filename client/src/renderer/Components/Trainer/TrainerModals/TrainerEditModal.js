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
import axios from 'axios';

const ModalContent = styled(DialogContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px',
  width: '400px',
}));

const TrainerEditModal = ({  trainer }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [salary, setSalary] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // Update state values when the trainer prop changes
  React.useEffect(() => {
    if (open && trainer) {
      // setName(trainer.name || '');
      // setEmail(trainer.email || '');
      // setPhone(trainer.phone || '');
      // setSalary(trainer.salary || '');
    }
  }, [open, trainer]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
const payload={        name: name,
  email: email,
  phone: phone,
  salary: salary,}
  console.log('payloadddddddddddddddddddddd',payload)
    try {
      await axios.put(`http://localhost:7000/trainers/${trainer._id}`, payload);
      // Perform any additional logic after successful update
    } catch (error) {
      console.log(error);
    }
  };

  // const handleClose = () => {
  //   onClose();
  // };

  return (
    <>
    <Button style={classes.editButton} onClick={handleOpen}>Edit</Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Trainer Profile</DialogTitle>
      <form onSubmit={handleSubmit}>
        <ModalContent>
          <TextField
            label="Name"
            value={name}
            onChange={handleNameChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={email}
            onChange={handleEmailChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            value={phone}
            onChange={handlePhoneChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Salary"
            value={salary}
            onChange={handleSalaryChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Save
            </Button>
          </DialogActions>
        </ModalContent>
      </form>
    </Dialog>
    </>
  );
};

export default TrainerEditModal;

const classes={
  editButton: {
    padding: '4px 8px',
    background: '#ffaa00',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
}