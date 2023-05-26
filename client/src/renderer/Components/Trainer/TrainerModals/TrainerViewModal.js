import React from 'react';
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

const TrainerViewModal = ({ open, onClose, trainer }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} style={{ borderRadius: '5px', backgroundColor: 'transparent' }} >
      <ModalContent>
        <Typography variant="h5" component="div" gutterBottom style={{ marginLeft: '100px' }} >
          Trainer Details
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          <strong>Name:</strong> {trainer?.name}
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          <strong>Email:</strong> {trainer?.email}
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          <strong>Contact:</strong> {trainer?.contact}
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          <strong>Date Joined:</strong> {trainer?.dateJoined}
        </Typography>
        <DialogActions style={{ marginLeft: '140px', backgroundColor: 'orange', borderRadius: '5px' }} >
          <Button onClick={handleClose} style={{ color: 'white' }} >
            Close
          </Button>
        </DialogActions>
      </ModalContent>
    </Dialog>
  );
};

export default TrainerViewModal;
