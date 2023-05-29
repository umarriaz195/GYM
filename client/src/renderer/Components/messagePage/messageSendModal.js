import React, { useState } from 'react';
import { Button, FormControlLabel, Checkbox, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const MessageSendModal = ({ onClose, data }) => {
  const [selectedOption, setSelectedOption] = useState('all');

  const trainers = ['Rahim', 'Umar', 'Umer', 'Haseeb'];
  const members = ['Maaz', 'Ali', 'Ahmed'];

  const handleSend = async () => {
    // Perform send message logic here
    console.log('Sending message to selected users', data);
    try {
      const response = await axios.post('http://localhost:7000/admin/ok/', {
        recipients: selectedOption,
        message: data,
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
    onClose();
  };

  const renderRecipientOptions = () => {
    return (
      <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <label
          htmlFor="recipient-select"
          style={{ marginRight: '10px', fontWeight: 'bold' }}
        >
          Recipients:
        </label>
        <select
          id="recipient-select"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          style={{
            flex: '1',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #bdbdbd',
          }}
        >
          <option value="all">All</option>
          <option value="trainers">All Trainers</option>
          <option value="members">All Members</option>
        </select>
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
            justifyContent: 'flex-end',
            marginBottom: '10px',
          }}
        >
          {renderRecipientOptions()}
        </div>
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
              backgroundColor: '#0d1a52',
              color: 'white',
              width: '100px',
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
