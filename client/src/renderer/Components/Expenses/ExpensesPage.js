import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import {
  Button,
  FormControl,
  InputLabel,
  InputAdornment,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { classes } from './Style';
import { scrollbarStyle } from 'renderer/Common/scrollbarStyle';
import axios from 'axios';
import AddExpenseModal from './ExpenseModal/AddExpenseModal';

const ExpensesPage = () => {
  const CustomScrollbarStyle = () => (
    <style dangerouslySetInnerHTML={{ __html: scrollbarStyle }} />
  );

  const [debitRecord, setDebitRecord] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [openExpenseModal, setOpenExpenseModal] = useState(false);

  const result = async () => {
    try {
      const response = await axios.get('http://localhost:7000/owner/dashboard');
      const data = response.data;
      console.log(data);
      setDebitRecord(data.debitRecord);
    } catch (e) {
      console.log('an error occurs', e);
    }
  };
  result();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOpenExpenseModal = () => {
    setOpenExpenseModal(true);
  };

  const handleCloseExpenseModal = () => {
    setOpenExpenseModal(false);
  };

  return (
    <div style={classes.container}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex' }}>
          <div>
            {/* Button to open the modal */}
            <Button
              onClick={handleOpenExpenseModal}
              style={{
                marginTop: '4px',
                backgroundColor: 'orange',
                color: 'white',
                borderRadius: '10px',
                marginRight: '30px',
                height: '50px',
              }}
            >
              Add Expense
            </Button>

            {/* Modal component */}
            <AddExpenseModal open={openExpenseModal} onClose={handleCloseExpenseModal} />
          </div>

          {/* Dropdown filter */}
          <FormControl
            variant="outlined"
            style={{
              marginBottom: '16px',
              minWidth: '200px',
              backgroundColor: 'white',
              borderRadius: '20px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              width: '80px',
            }}
          >
            <InputLabel style={{ marginLeft: '4px' }}>
              Filter Expense
            </InputLabel>
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
              <MenuItem value="option1" selected>
                All
              </MenuItem>
              <MenuItem value="option2">Trainer's Salary</MenuItem>
              <MenuItem value="option3">Maintenance</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div>
        <h2>Expense List</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '1020px',
            justifyContent: 'space-between',
          }}
        >
          <h4 style={{ flex: 1, marginLeft: '30px' }}>EXPENSE NAME</h4>
          <h4>AMOUNT</h4>
        </div>

        <div style={classes.expensesListContainer}>
          <CustomScrollbarStyle />
          {/* Trainers list */}
          {debitRecord.map((expenses, index) => (
            <div key={index} style={classes.expensesRow}>
              <div>{expenses.source}</div>
              <div style={{ color: 'red' }}>{expenses.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpensesPage;
