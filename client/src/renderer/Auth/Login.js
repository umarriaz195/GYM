import React from 'react';
import { Grid, Paper, Typography, TextField, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FitnessLogo from '../Assets/fitnesslogo.png'

const LoginPage = () => {

    const navigate = useNavigate()
    const gotoDashboard = () => {
        navigate('/dashboard');
      };
   

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Grid container >
        <Grid item xs={6} style={{ height: '100vh', backgroundColor: 'white' }} >
          <Paper style={{ padding: '2rem', marginTop: '80px', width:'80%', marginLeft: '30px', height: '500px' }}>
            <Typography variant="h4" component="h4" align="start" style={{ fontWeight: 'bolder' }} >
              Login
            </Typography>
            <Typography align="start" sx={{ marginTop: '1rem', color: 'gray', fontSize: '0.9rem' }}>
              Don't have an account? 
              <Link href="#" style={{ paddingLeft: '5px', fontWeight: 'bold'}} >Register</Link>
            </Typography>
            <form>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <Button variant="contained" fullWidth sx={{ marginTop: '1rem', height: '50px', borderRadius: '10px' }} onClick={gotoDashboard} >
                Login
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={6} style={{ height: '100vh' }} >
          <Paper style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#020529', color: 'white' }}>
            <Typography variant="h3" component="h1" align="center" style={{ fontWeight: 'bolder', fontFamily: 'serif' }} >
              Welcome to the Gym
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;
