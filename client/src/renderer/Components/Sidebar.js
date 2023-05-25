import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MessageIcon from '@mui/icons-material/Message';
import Logo from '../Assets/Logo.png';
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const sidebarStyle = {
  width: drawerWidth,
  flexShrink: 0,
  backgroundColor: '#071A39',
  color: 'white',
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
  backgroundColor: '#071A39',
  marginBottom: '20px',
};

const listItemStyle = {
  borderRadius: '8px',
  marginBottom: '8px',
  cursor: 'pointer',
};

const listItemIconStyle = {
  color: '#fff',
};

const listStyle = {
  marginTop: '50px',
};

const textStyle = {
  fontSize: '12px',
};

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const gotoDashboard = () => {
    navigate('/dashboard');
  };

  const gotoMembers = () => {
    navigate('/member');
  };

  const gotoTrainer = () => {
    navigate('/trainer');
  };

  const gotoMessage = () => {
    navigate('/message');
  };

  return (
    <div style={{ display: 'flex' }}>
      <Drawer style={sidebarStyle} variant="permanent" PaperProps={{ style: sidebarStyle }}>
        <div style={{ minHeight: '64px', marginTop: '130px' }} />
        <List style={listStyle}>
          <ListItem
            button
            style={{
              ...listItemStyle,
              backgroundColor: location.pathname === '/' ? '#bdbdbd' : 'initial',
            }}
            onClick={gotoDashboard}
          >
            <ListItemIcon style={listItemIconStyle}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={<Typography style={textStyle}>Dashboard</Typography>} />
          </ListItem>
          <ListItem
            button
            style={{
              ...listItemStyle,
              backgroundColor: location.pathname === '/member' ? '#bdbdbd' : 'initial',
            }}
            onClick={gotoMembers}
          >
            <ListItemIcon style={listItemIconStyle}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary={<Typography style={textStyle}>Members</Typography>} />
          </ListItem>
          <ListItem
            button
            style={{
              ...listItemStyle,
              backgroundColor: location.pathname === '/trainer' ? '#bdbdbd' : 'initial',
            }}
            onClick={gotoTrainer}
          >
            <ListItemIcon style={listItemIconStyle}>
              <FitnessCenterIcon />
            </ListItemIcon>
            <ListItemText primary={<Typography style={textStyle}>Trainers</Typography>} />
          </ListItem>

          <ListItem
            button
            style={{
              ...listItemStyle,
              backgroundColor: location.pathname === '/message' ? '#bdbdbd' : 'initial',
            }}
            onClick={gotoMessage}
          >
            <ListItemIcon style={listItemIconStyle}>
              <MessageIcon />
            </ListItemIcon>
            <ListItemText primary={<Typography style={textStyle}>Message</Typography>} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
