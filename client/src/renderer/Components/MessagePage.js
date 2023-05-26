import React, { useState } from 'react';
import {
  TextField,
  Button,
  Menu,
  MenuItem,
  Box,
  Typography,
} from '@mui/material';

const Message = () => {
  const [message, setMessage] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [showList, setShowList] = useState(false);

  const handleSend = () => {
    // Perform send message logic here
    console.log(`Sending message: ${message} to: ${selectedOption}`);
  };

  const handleOptionClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setAnchorEl(null);
    setShowList(true);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <TextField
        label="Message"
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        fullWidth
        multiline
        rows={4}
        margin="normal"
        style={{ width: '50%', marginLeft: '250px' }}
      />
      <Button
        variant="contained"
        onClick={handleOptionClick}
        style={{
          width: '20%',
          marginLeft: '420px',
          borderRadius: '20px',
          backgroundColor: 'orange',
          marginTop: '5px',
        }}
      >
        Send To
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={() => handleOptionSelect('all')}>All</MenuItem>
        <MenuItem onClick={() => handleOptionSelect('users')}>
          All Users
        </MenuItem>
        <MenuItem onClick={() => handleOptionSelect('trainers')}>
          All Trainers
        </MenuItem>
      </Menu>
      {showList && (
        <div>
          {/* Dummy data for trainers and members */}
          <Typography variant="h6">Trainers:</Typography>
          <ul>
            <li>Trainer 1</li>
            <li>Trainer 2</li>
            <li>Trainer 3</li>
          </ul>
          <Typography variant="h6">Members:</Typography>
          <ul>
            <li>Member 1</li>
            <li>Member 2</li>
            <li>Member 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Message;
