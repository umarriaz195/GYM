import React from 'react';
import { Dialog, DialogContent, DialogTitle, DialogActions, Button, Paper } from '@mui/material';

const DetailModal = ({ open, onClose, details }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          position: 'absolute',
          top: 0,
          right: '100%',
          height: '100%',
          maxHeight: 'calc(100% - 64px)',
          borderRadius: 0,
        },
      }}
      BackdropProps={{
        sx: {
          position: 'absolute',
        },
      }}
    >
      <DialogTitle>Details</DialogTitle>
      <DialogContent>
        <div>
          Check-in Time: {details.checkInTime}<br />
          Check-out Time: {details.checkOutTime}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailModal;
