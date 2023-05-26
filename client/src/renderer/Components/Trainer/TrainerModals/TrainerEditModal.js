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

const ModalContent = styled(DialogContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px',
  width: '400px'
}));

const TrainerEditModal = ({ open, onClose, trainer }) => {
  const [name, setName] = useState(trainer?.name || '');
  const [email, setEmail] = useState(trainer?.email || '');
  const [contact, setContact] = useState(trainer?.contact || '');
  const [salary, setSalary] = useState(trainer?.salary || '');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    // You can access the updated trainer data in the state variables (name, email, contact, salary)
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
    <DialogTitle>Edit Trainer Profile</DialogTitle>
      <form onSubmit={handleSubmit}>
        <ModalContent>
          <TextField
            label="Name"
            value={name}
            onChange={handleNameChange}
            variant="outlined"
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Email"
            value={email}
            onChange={handleEmailChange}
            variant="outlined"
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Contact"
            value={contact}
            onChange={handleContactChange}
            variant="outlined"
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Salary"
            value={salary}
            onChange={handleSalaryChange}
            variant="outlined"
            fullWidth
            required
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
  );
};

export default TrainerEditModal;
