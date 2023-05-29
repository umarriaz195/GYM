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
  width: '400px'
}));

const UserEditModal = ({ member }) => {
  console.log('Member:', member); 
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [salary, setSalary] = useState();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // Update state values when the trainer prop changes
  React.useEffect(() => {
    if (open && member) {
      // setName(trainer.name || '');
      // setEmail(trainer.email || '');
      // setPhone(trainer.phone || '');
      // setSalary(trainer.salary || '');
    }
  }, [open, member]);
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

    const payLoad={ }
    if(name){
      payLoad.name=name
    }
    if(email){
      payLoad.email=email
    }
    if(phone){
      payLoad.phone=phone
    }
    if(salary){
      payLoad.salary=salary
    }

    try {
      await axios.put(`http://localhost:7000/member/${member._id}`, payLoad)
    } catch (error){
      console.log(error);
    }
  } 
    
 
  return (
    <>
    <Button style={classes.editButton} onClick={handleOpen}>Edit</Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>EDIT MEMBER PROFILE</DialogTitle>
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
            label="salary"
            value={salary}
            onChange={handleSalaryChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <DialogActions>
            <Button onClick={handleClose} style={{ backgroundColor: 'red', color: 'white' }}>
              Cancel
            </Button>
            <Button onClick={handleClose} type="submit" style={{ backgroundColor: '#05ad24', color: 'white' }}>
              Save
            </Button>
          </DialogActions>
        </ModalContent>
      </form>
    </Dialog></>
  );
};

export default UserEditModal;


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