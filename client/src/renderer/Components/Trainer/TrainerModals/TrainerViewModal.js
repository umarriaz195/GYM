import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  styled,
} from '@mui/material';

const ModalContent = styled(DialogContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  padding: '10px',
  width: '400px',
  marginLeft: '20px',
}));

const TrainerViewModal = ({ trainer }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);


const handlePaySalary = () => {
    // Perform logic to pay salary here
    setConfirmModalOpen(false);
  };


const handleConfirm = () => {
    setConfirmModalOpen(true);
  };

  const handleCancel = () => {
    setConfirmModalOpen(false);
  };

  return (
    <>
      <Button style={classes.viewButton} onClick={handleOpen}>View</Button>
      <Dialog open={open} onClose={handleClose} style={{ borderRadius: '5px', backgroundColor: 'transparent' }}>
        <ModalContent>
          <Typography variant="h5" component="div" gutterBottom style={{ marginLeft: '100px' }}>
            Trainer Details
          </Typography>
          <Typography variant="body1" component="div" gutterBottom>
            <strong>Name:</strong> {trainer.name}
          </Typography>
          <Typography variant="body1" component="div" gutterBottom>
            <strong>Email:</strong> {trainer.email}
          </Typography>
          <Typography variant="body1" component="div" gutterBottom>
            <strong>Contact:</strong> {trainer.phone}
          </Typography>
          <Typography variant="body1" component="div" gutterBottom>
            <strong>Date Joined:</strong> {trainer.picture}
          </Typography>
          <div style={{ display: 'flex' }}>
          <DialogActions style={{ marginLeft: '140px', backgroundColor: 'orange', borderRadius: '5px' }}>
            <Button onClick={handleClose} style={{ color: 'white' }}>
              Close
            </Button>
          </DialogActions>
            <DialogActions style={{ backgroundColor: '#0d1a52', borderRadius: '5px', marginLeft: '5px' }}>
              <Button onClick={handleConfirm} style={{ color: 'white' }}>
                Pay Salary
              </Button>
            </DialogActions>
        </div>
        </ModalContent>
        {/* Confirmation Modal */}
      <Dialog open={confirmModalOpen} onClose={handleCancel}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Are you sure you want to pay the salary for {trainer?.name}?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} style={{ color: 'red' }}>
            Cancel
          </Button>
          <Button onClick={handlePaySalary} style={{ color: 'green' }}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      </Dialog>
    </>
  );
};

export default TrainerViewModal;
const classes={
  viewButton: {
    padding: '4px 8px',
    background: '#00aaff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
}