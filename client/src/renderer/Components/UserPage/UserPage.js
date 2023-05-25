import React, { useState } from 'react';
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
import Modal from './Modal';

const UserPage = () => {
  // User data array
  const users = [
    {
      name: 'John Doe',
      status: 'Active',
    },
    {
      name: 'John Doe',
      status: 'Active',
    },
    {
      name: 'John Doe',
      status: 'Inactive',
    },
    {
      name: 'John Doe',
      status: 'Inactive',
    },
    {
      name: 'John Doe',
      status: 'Active',
    },
    {
      name: 'John Doe',
      status: 'Inactive',
    },
    {
      name: 'John Doe',
      status: 'Active',
    },
    {
      name: 'John Doe',
      status: 'Inactive',
    },
    {
      name: 'John Doe',
      status: 'Active',
    },
    {
      name: 'John Doe',
      status: 'Active',
    },
    {
      name: 'John Doe',
      status: 'Active',
    },

    // Add more user data objects as needed
  ];

  const classes = {
    container: {
      width: '90%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px',
      marginTop: '40px',
    },
    card: {
      flex: '1',
      width: '100px',
      height: '100%',
      borderRadius: '8px',
      background: '#f0f0f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
      color: 'white',
    },
    userListContainer: {
      width: '100%',
      height: '350px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      overflowY: 'auto',
      padding: '16px',
      marginTop: '',
    },
    userRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid #ccc',
      padding: '8px',
      fontSize: '14px',
    },
    userButtons: {
      display: 'flex',
      gap: '8px',
    },
    viewButton: {
      padding: '4px 8px',
      background: '#00aaff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
    editButton: {
      padding: '4px 8px',
      background: '#ffaa00',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
    removeButton: {
      padding: '4px 8px',
      background: '#ff0000',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px',
      borderRadius: '20px',
      background: 'white',
      padding: '8px',
      border: '1px solid #ccc',
      width: '30%',
    },
    searchInput: {
      marginRight: '8px',
      outline: 'none',
      border: 'none',
      flexGrow: 1,
      height: '20px',
    },
  };

  const scrollbarStyle = `
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

  // Apply the custom scrollbar style
  const CustomScrollbarStyle = () => (
    <style dangerouslySetInnerHTML={{ __html: scrollbarStyle }} />
  );

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div style={classes.container}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={classes.searchContainer}>
          <input
            style={classes.searchInput}
            variant="outlined"
            size="small"
            placeholder="Search"
          />
          <SearchIcon />
        </div>

        <div style={{ display:'flex' }} >
          <div>
            {/* Button to open the modal */}
            <Button
              onClick={handleOpenModal}
              style={{
                marginTop: '4px',
                backgroundColor: 'orange',
                color: 'white',
                borderRadius: '10px',
                marginRight: '30px', 
                height: '50px'
              }}
            >
              Add Member
            </Button>

            {/* Modal component */}
            <Modal open={openModal} onClose={handleCloseModal} />
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
            <InputLabel style={{ marginLeft: '8px' }}>
              Filter Members By
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
              <MenuItem value="">All</MenuItem>
              <MenuItem value="option1">Active Members</MenuItem>
              <MenuItem value="option2">Inactive Members</MenuItem>
              <MenuItem value="option3">Men</MenuItem>
              <MenuItem value="option3">Women</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div>
        <h2>Members List</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '1020px',
            justifyContent: 'space-between',
          }}
        >
          <h4 style={{ flex: 1, marginLeft: '30px' }}>NAME</h4>
          <h4 style={{ flex: 1, marginLeft: '-15px' }}>STATUS</h4>
          <h4 style={{ flex: 1, marginRight: '-230px' }}>SELECT AN ACTION</h4>
        </div>
        <div style={classes.userListContainer}>
          <CustomScrollbarStyle />
          {users.map((user, index) => (
            <div key={index} style={classes.userRow}>
              <div>{user.name}</div>
              <div
                style={{ color: user.status === 'Active' ? 'green' : 'red' }}
              >
                {user.status}
              </div>
              <div style={classes.userButtons}>
                <button style={classes.viewButton}>View</button>
                <button style={classes.editButton}>Edit</button>
                <button style={classes.removeButton}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
