import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Tooltip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const Navbar = () => {
  const navbarStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    background: 'transparent',
    width: '82.5%',
    height: '10%',
    background: 'rgba(255, 255, 255, 0.5)',
    boxShadow: 'none',
    zIndex: 4,
    backdropFilter: 'blur(8px)', 
  };

  const iconButtonStyle = {
    color: 'gray',
  };

  const avatarStyle = {
    width: 40,
    height: 40,
  };

  const suggestionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff',
  };

  return (
    <AppBar position="static" style={navbarStyle}>
      <Toolbar>
        <IconButton style={iconButtonStyle} edge="start">
          <Tooltip title="Search" arrow>
            <SearchIcon />
          </Tooltip>
        </IconButton>
        <div style={{ flexGrow: 1 }} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title="Notifications" arrow>
            <IconButton style={iconButtonStyle}>
              <NotificationsIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Contact" arrow>
            <IconButton style={iconButtonStyle}>
              <ContactSupportIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            title={
              <div style={suggestionStyle}>
                <span>Profile</span>
              </div>
            }
            arrow
          >
            <Avatar
              src="/path/to/avatar.jpg" // Replace with actual image source
              alt="Avatar"
              style={avatarStyle}
            />
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
