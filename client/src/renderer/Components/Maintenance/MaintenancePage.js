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
import AddExpenseModal from './MaintenanceModal/AddExpenseModal';
import EditExpenseModal from './MaintenanceModal/EditExpenseModal';

const ExpensesPage = () => {
  const CustomScrollbarStyle = () => (
    <style dangerouslySetInnerHTML={{ __html: scrollbarStyle }} />
  );

  const [expenses, setExpenses] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [openExpenseModal, setOpenExpenseModal] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const result = async () => {
    try {
      const response = await axios.get(
        'http://localhost:7000/admin/getexpense'
      );
      const data = response.data;
      console.log(data);
      setExpenses(data.expenses);
    } catch (e) {
      console.log('an error occurs', e);
    }
  };
  result();

  const deleteExpense = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:7000/admin/deleteExpense/${id}`
      );
      console.log(`expense deleted`, response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOpenExpenseModal = () => {
    setOpenExpenseModal(true);
  };

  const handleCloseExpenseModal = () => {
    setOpenExpenseModal(false);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  return (
    <div style={classes.container}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2>MAINTENANCE PORTAL</h2>
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2>Expense List</h2>
          <div style={{ display: 'flex' }}>
            <div>
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

              <AddExpenseModal
                open={openExpenseModal}
                onClose={handleCloseExpenseModal}
              />
            </div>

            <FormControl
              variant="outlined"
              style={{
                marginBottom: '16px',
                minWidth: '200px',
                backgroundColor: 'white',
                borderRadius: '20px',
                // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '1020px',
            justifyContent: 'space-between',
          }}
        >
          <h4 style={{ flex: 1, paddingLeft: '12px' }}>EXPENSE NAME</h4>
          <div style={{ display: 'flex', gap: '70px', paddingRight: '5px' }}>
            <h4>AMOUNT</h4>
            <h4>SELECT AN ACTION</h4>
          </div>
        </div>

        <div style={classes.expensesListContainer}>
          <CustomScrollbarStyle />
          {/* Trainers list */}
          {expenses.map((expenses, index) => (
            <div>
              <div key={index} style={classes.expensesRow}>
                <div>{expenses.expenseName}</div>
                <div style={{ display: 'flex', gap: '105px' }}>
                  <div style={{ marginTop: '8px', fontWeight: 'bold' }}>
                    {expenses.amount}
                  </div>
                  <div>
                    <EditExpenseModal
                      open={editModalOpen}
                      onClose={handleEditModalClose}
                      expenses={expenses}
                    />
                    <button
                      onClick={() => deleteExpense(expenses._id)}
                      style={{
                        // padding: '4px 8px',
                        background: '#ff0000',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'background 0.3s ease',
                        height: '32px',
                        marginLeft: '20px'
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <hr style={{ width: '100%', border: '1px solid #ccc' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpensesPage;
