import React from 'react';
import { makeStyles } from '@mui/styles';
import Navbar from 'renderer/Components/Navbar';
import Sidebar from 'renderer/Components/Sidebar';
import TrainerPage from 'renderer/Components/Trainer/TrainerPage';

const Trainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.user}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.contentWrapper}>
        <div className={classes.navbar}>
          <Navbar />
        </div>
        <div className={classes.content}>
          <TrainerPage />
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  user: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: '#fafafa',
  },
  sidebar: {
    flexShrink: 0,
    overflowY: 'auto',
  },
  contentWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
  },
  navbar: {
    position: 'fixed',
    top: 0,
    right: 0,
    background: 'transparent',

    zIndex: 4,
  },
  content: {
    flex: 1,
    padding: '16px',
    overflow: 'hidden'
  },
}));

export default Trainer;
