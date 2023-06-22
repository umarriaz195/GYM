import React from 'react';
import { makeStyles } from '@mui/styles';
import Sidebar from 'renderer/Components/Sidebar';
import Navbar from 'renderer/Components/Navbar';
import ExpensesPage from 'renderer/Components/Expenses/ExpensesPage';


const Expenses = () => {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.contentWrapper}>
        <div className={classes.navbar}>
          <Navbar />
        </div>
        <div className={classes.content}>
          <ExpensesPage />
        </div>
      </div>
    </div>
  );
};



const useStyles = makeStyles(() => ({
  home: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: '#fafafa'
  },
  sidebar: {
    flexShrink: 0,
    overflowY: 'auto',
  },
  contentWrapper: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
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
   
  },
}));

export default Expenses;
