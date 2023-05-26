import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

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
    cursor: 'pointer',
  };

  const suggestionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff',
  };

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/')
  }

  return (
    <AppBar position="static" style={navbarStyle}>
      <Toolbar>
        <IconButton style={{ color: 'black' }} edge="start" disabled>
          <p>{currentTime.toLocaleTimeString()}</p>
        </IconButton>
        <div style={{ flexGrow: 1 }} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title="Notifications" arrow>
            <IconButton style={iconButtonStyle}>
              <NotificationsIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Logout" arrow>
            <IconButton style={{ color: 'gray', marginRight: '4px' }} onClick={handleLogout}>
              <LogoutIcon />
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
