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
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <TextField
        label="Message"
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        fullWidth
        multiline
        rows={4}
        margin="normal"
        style={{ width:'50%', marginLeft: '250px' }}
      />
      <Button variant="contained" onClick={handleOptionClick} style={{ width: '20%', marginLeft: '420px', borderRadius: '20px', backgroundColor: 'orange', marginTop: '5px' }}>
        Send To
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={() => handleOptionSelect('all')}>All</MenuItem>
        <MenuItem onClick={() => handleOptionSelect('users')}>All Users</MenuItem>
        <MenuItem onClick={() => handleOptionSelect('trainers')}>
          All Trainers
        </MenuItem>
      </Menu>
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleSend} style={{width:'20%', marginLeft: '420px', borderRadius: '20px', backgroundColor: 'darkblue'}}>
          Send
        </Button>
      </Box>
      {selectedOption && (
        <Typography variant="body2" mt={2}>
          Selected Option: {selectedOption}
        </Typography>
      )}
    </div>
  );
};

export default Message;
