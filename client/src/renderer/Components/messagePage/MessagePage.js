import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import MessageSendModal from './messageSendModal';

const MessageUserPage = () => {
  const [showList, setShowList] = useState(false);
const [message,setMessage]=useState('')
  const handleSendClick = () => {
    setShowList(true);
  };

  const handleCloseModal = () => {
    setShowList(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px', alignItems: 'center' }}>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '400px' }}>
        <Typography style={{ fontSize: '2rem', fontWeight: 'bolder', marginLeft: '60px' }} >SEND MESSAGE</Typography>
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            multiline
            rows={4}
            margin="normal"
          />
          <Button
            variant="contained"
            onClick={()=>handleSendClick(message)}
            style={{
              marginTop: '10px',
              borderRadius: '20px',
              backgroundColor: '#ff8c00',
              color: 'white',
              width: 'fit-content',
              minWidth: '150px',
              marginLeft: '250px'
            }}
          >
            Send To
          </Button>
        </div>
        {showList && <MessageSendModal data={message} onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default MessageUserPage;