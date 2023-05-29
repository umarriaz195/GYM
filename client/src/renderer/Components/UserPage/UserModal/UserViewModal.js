import { useState } from 'react';
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

const UserViewModal = ({ open, onClose, member }) => {
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const handleClose = () => {
    onClose();
  };

  const handlePayFees = async () => {
    try {
      const response = await fetch('http://localhost:7000/admin/fee-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ memberId: member?._id }),
      });

      if (response.ok) {
        // Fee payment processed successfully
        console.log('Fee payment processed successfully');
      } else {
        // Failed to process fee payment
        console.error('Failed to process fee payment');
      }
    } catch (error) {
      console.error('Error processing fee payment:', error.message);
    }

    // Close the confirmation modal
    setConfirmModalOpen(false);
  };

  const handleConfirm = () => {
    setConfirmModalOpen(true);
  };

  const handleCancel = () => {
    setConfirmModalOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      style={{ borderRadius: '5px', backgroundColor: 'transparent' }}
    >
      <ModalContent>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          style={{ marginLeft: '100px' }}
        >
          Member Details
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          <strong>Name:</strong> {member?.name}
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          <strong>Email:</strong> {member?.email}
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          <strong>Contact:</strong> {member?.phone}
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          <strong>Date Joined:</strong> {member?.joinDate}
        </Typography>
        <div style={{ display: 'flex' }}>
          <DialogActions
            style={{
              marginLeft: '140px',
              backgroundColor: 'orange',
              borderRadius: '5px',
            }}
          >
            <Button onClick={handleClose} style={{ color: 'white' }}>
              Close
            </Button>
          </DialogActions>
          <DialogActions
            style={{
              backgroundColor: '#0d1a52',
              borderRadius: '5px',
              marginLeft: '5px',
            }}
          >
            <Button onClick={handleConfirm} style={{ color: 'white' }}>
              Pay Fees
            </Button>
          </DialogActions>
        </div>
      </ModalContent>

      {/* Confirmation Modal */}
      <Dialog open={confirmModalOpen} onClose={handleCancel}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Are you sure you want to pay the fees for {member?.name}?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} style={{ color: 'red' }}>
            Cancel
          </Button>
          <Button onClick={handlePayFees} style={{ color: 'green' }}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Dialog>
  );
};

export default UserViewModal;
