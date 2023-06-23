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

const EditExpenseModal = ({ expenses }) => {
  console.log('Expenses:', expenses);
  const [expenseName, setExpenseName] = useState();
  const [amount, setAmount] = useState();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // Update state values when the trainer prop changes
  React.useEffect(() => {
    if (open && expenses) {
      // setName(trainer.name || '');
      // setEmail(trainer.email || '');
      // setPhone(trainer.phone || '');
      // setSalary(trainer.salary || '');
    }
  }, [open, expenses]);
  const handleExpenseNameChange = (event) => {
    setExpenseName(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payLoad = {};
    if (expenseName) {
      payLoad.expenseName = expenseName;
    }
    if (amount) {
      payLoad.amount = amount;
    }

    try {
      await axios.put(
        `http://localhost:7000/admin/updateExpense/${expenses._id}`,
        payLoad
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button style={classes.editButton} onClick={handleOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>EDIT EXPENSE</DialogTitle>
        <form onSubmit={handleSubmit}>
          <ModalContent>
            <TextField
              label="Expense Name"
              value={expenseName}
              onChange={handleExpenseNameChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Amount"
              value={amount}
              onChange={handleAmountChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <DialogActions>
              <Button
                onClick={handleClose}
                style={{ backgroundColor: 'red', color: 'white' }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleClose}
                type="submit"
                style={{ backgroundColor: '#05ad24', color: 'white' }}
              >
                Save
              </Button>
            </DialogActions>
          </ModalContent>
        </form>
      </Dialog>
    </>
  );
};

export default EditExpenseModal;

const classes = {
  editButton: {
    height: '32px',
    background: '#ffaa00',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
};
