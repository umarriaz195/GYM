import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const RegisterModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contactNo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:7000/admin/register', formData);
      // Handle the response as needed
      console.log(response.data);

      // Clear the form
      setFormData({
        name: '',
        email: '',
        password: '',
        contactNo: '',
      });

      // Close the modal
      onClose();
    } catch (error) {
      console.error('Error creating admin:', error.message);
      // Handle the error, display an error message, etc.
    }
  };

  const handleBackdropClick = (event) => {
    // Close the modal when clicking on the backdrop
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        visibility: open ? 'visible' : 'hidden',
        opacity: open ? 1 : 0,
        transition: 'opacity 0.3s',
        zIndex: 999,
      }}
      onClick={handleBackdropClick}
    >
      <div
        style={{
          width: '400px',
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '8px',
          outline: 'none',
        }}
      >
        <Typography variant="h4" component="h4" align="center" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            type="name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <TextField
            label="Contact"
            type="contactNo"
            variant="outlined"
            fullWidth
            margin="normal"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleInputChange}
          />
          <Button variant="contained" fullWidth sx={{ marginTop: '1rem', height: '50px', borderRadius: '10px' }} type="submit">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;