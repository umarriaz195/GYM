import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';

const FeesModal = ({ open, onClose }) => {
  const [filter, setFilter] = useState('all');

  const members = [
    { id: 1, name: 'John Doe', status: 'paid' },
    { id: 2, name: 'Jane Smith', status: 'unpaid' },
    { id: 3, name: 'Mike Johnson', status: 'paid' },
    { id: 4, name: 'Emily Davis', status: 'unpaid' },
    { id: 5, name: 'Emily Davis', status: 'paid' },
    { id: 6, name: 'Emily Davis', status: 'paid' },
    { id: 7, name: 'Emily Davis', status: 'unpaid' },
    { id: 8, name: 'Emily Davis', status: 'unpaid' },
    { id: 9, name: 'Emily Davis', status: 'paid' },
    // Add more trainers here
  ];

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredMembers =
    filter === 'all'
      ? members
      : members.filter((members) => members.status === filter);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Members Fees</DialogTitle>
      <DialogContent>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
          }}
        >
          <Button
            variant={filter === 'all' ? 'contained' : 'outlined'}
            onClick={() => handleFilterChange('all')}
            style={{ backgroundColor: '#00aaff', color: 'white' }}
          >
            All
          </Button>
          <Button
            variant={filter === 'paid' ? 'contained' : 'outlined'}
            onClick={() => handleFilterChange('paid')}
            style={{ backgroundColor: '#00ff00', color: 'white' }}
          >
            Paid Fees
          </Button>
          <Button
            variant={filter === 'unpaid' ? 'contained' : 'outlined'}
            onClick={() => handleFilterChange('unpaid')}
            style={{ backgroundColor: '#ff0000', color: 'white' }}
          >
            Unpaid Fees
          </Button>
        </div>
        <div
          style={{
            width: '350px',
            height: '200px',
            overflowY: 'scroll',
            backgroundColor: '#f0f0f0',
          }}
        >
          {filteredMembers.map((members) => (
            <div
              key={members.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px',
                padding: '5px',
                borderBottom: '2px solid #d1d1cf'
              }}
            >
              <span>{members.name}</span>
              <span
                style={{ color: members.status === 'paid' ? 'green' : 'red' }}
              >
                {members.status}
              </span>
            </div>
          ))}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} style={{ color: 'red' }}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FeesModal;
