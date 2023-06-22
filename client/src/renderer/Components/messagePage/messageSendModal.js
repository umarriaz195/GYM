import React, { useState } from 'react';
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { scrollbarStyle } from 'renderer/Common/scrollbarStyle';
import axios from 'axios';

const MessageSendModal = ({ onClose, data }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('all');

  const trainers = ['Rahim', 'Umar', 'Umer', 'Haseeb'];
  const members = ['Maaz', 'Ali', 'Ahmed'];

  const handleSend = async () => {
    // Perform send message logic here
    console.log('Sending message to selected users',data);
    try {
      const response = await axios.post('http://localhost:7000/admin/ok/', {recipients:selectedOption,message:data})
      console.log(response)
    } catch (e) {
      console.log(e)
    }
    onClose();
  };

  const handleSearch = () => {
    // Perform search logic here
    console.log('Searching for:', searchQuery);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    // Perform clear search logic here
    console.log('Clearing search');
  };

  const CustomScrollbarStyle = () => (
    <style dangerouslySetInnerHTML={{ __html: scrollbarStyle }} />
  );

  const renderUserList = () => {
    let users = [];

    if (selectedOption === 'all') {
      users = [...trainers, ...members];
    } else if (selectedOption === 'trainers') {
      users = trainers;
    } else if (selectedOption === 'members') {
      users = members;
    }

    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '15px',
          overflowY: 'auto',
          backgroundColor: 'white',
          border: '1px solid #bdbdbd',
          marginTop: '10px',
          height: '290px',
        }}
      >
        {users.map((user, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 15px',
              borderBottom: '1px solid #bdbdbd',
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label={user}
              style={{ flex: '1' }}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <CustomScrollbarStyle />
      <div
        style={{
          width: '400px',
          backgroundColor: 'white',
          borderRadius: '15px',
          padding: '20px',

        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
          <TextField
            label="Search"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ flex: '1', borderRadius: '20px' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClearSearch}
                    edge="end"
                    size="small"
                    style={{ visibility: searchQuery ? 'visible' : 'hidden' }}
                  >
                    <CloseIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <IconButton
            onClick={handleSearch}
            color="primary"
            size="small"
            disabled={!searchQuery}
          >
            <SearchIcon />
          </IconButton>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            style={{ maxWidth: '150px' }}
          >
            <option value="all">Show All</option>
            <option value="trainers">All Trainers</option>
            <option value="members">All Members</option>
          </select>
        </div>
        {renderUserList()}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '10px',
          }}
        >
          <Button
            variant="contained"
            onClick={onClose}
            style={{
              borderRadius: '20px',
              backgroundColor: '#ff0000',
              color: 'white',
              width: '100px',
              marginRight: '10px',
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSend}
            style={{
              borderRadius: '20px',
              backgroundColor: '#4caf50',
              color: 'white',

              width: '100px'
            }}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MessageSendModal;