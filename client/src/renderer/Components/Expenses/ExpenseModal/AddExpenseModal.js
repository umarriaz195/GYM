import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  FormControl
} from '@mui/material';
import Modal from 'renderer/Components/Trainer/TrainerModals/TrainerModal';
import axios from 'axios';

const AddExpenseModal = ({ open, onClose }) => {
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [openTrainerModal, setOpenTrainerModal] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOpenTrainerModal = () => {
    setOpenTrainerModal(true);
  };

  const handleCloseTrainerModal = () => {
    setOpenTrainerModal(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform form submission logic here
    // try {
    //   const response = await axios.post('http://localhost:7000/trainers/add', {
    //     name:fullName,
    //     email,
    //     phone,
    //     // package,
    //     salary:salary,

    //   });
    //   console.log(response)
    //   // Handle response if needed
    // } catch (e) {
    //   console.log(e);
    // }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Expense</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <FormControl
            variant="outlined"
            style={{
              marginBottom: '16px',
              minWidth: '200px',
              backgroundColor: 'white',
              borderRadius: '20px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              width: '100%',
            }}
          >
            <InputLabel style={{ marginLeft: '4px' }}>Expense Type</InputLabel>
            <Select
              value={selectedOption}
              onChange={handleOptionChange}
              label="Select Option"
              style={{
                paddingLeft: '8px',
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                borderRadius: '20px',
              }}
            >
              <MenuItem value="Trainer's Salary"  onClick={handleOpenTrainerModal} >Trainer's Salary</MenuItem>
              <MenuItem value="Maintenance">Maintenance</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Expense Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
          />
          <TextField
            label="Amount"
            variant="outlined"
            fullWidth
            margin="normal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </DialogContent>
        {selectedOption == "Trainer's Salary" && (
          <div>
            <Modal open={openTrainerModal} onClose={handleCloseTrainerModal} />
          </div>
        )}
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

export default AddExpenseModal;
