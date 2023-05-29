import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';

import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  LinearProgress,
} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PersonIcon from '@mui/icons-material/Person';
import axios from 'axios';
import MenuIcon from '@mui/icons-material/Menu';
import MainGraph from 'renderer/Graphs/MainGraph';
import SideGraph from 'renderer/Graphs/SideGraph';
import useStyles from './Style';
import { transactions, expenses } from './Data';
import { scrollbarStyle } from 'renderer/Common/scrollbarStyle';

const DashboardPage = () => {
  const classes = useStyles();
  const [balance, setBalance] = useState(null);
  const [profit, setProfit] = useState(null);
  const [loss, setLoss] = useState(null);
  const [creditAmount, setCreditAmount] = useState(null);
  const [debitAmount, setDebitAmount] = useState(null);
  const [users, setUsers] = useState(0);
  const [creditRecord, setCreditRecord] = useState([]);
  const [debitRecord, setDebitRecord] = useState([]);
  const [monthlyRecord, setMonthlyRecord] = useState([]);
  const [yearlyRecord, setYearlyRecord] = useState([]);
  // const [,setBalance]=useState(null)

  const result = async () => {
    try {
      const response = await axios.get('http://localhost:7000/owner/dashboard');
      const data = response.data;
      console.log(data);
      setBalance(data.balance);
      setCreditAmount(data.creditAmount);
      setDebitAmount(data.debitAmount);
      data.profit > 0 ? setProfit(data.profit) : setLoss(data.loss);
      setUsers(data.users);
      setCreditRecord(data.creditRecord);
      setDebitRecord(data.debitRecord);
      setMonthlyRecord(data.monthlyDetails);
      setYearlyRecord(data.yearlyDetails);
    } catch (e) {
      console.log('an error occurs', e);
    }
  };
  result();
  // Apply the custom scrollbar style
  const CustomScrollbarStyle = () => (
    <style dangerouslySetInnerHTML={{ __html: scrollbarStyle }} />
  );

  return (
    <div className={classes.dashboard}>
      <div className={classes.content}>
        <div className={classes.cardContainer}>
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.headingContainer}>
                <div>
                  <Typography
                    variant="subtitle1"
                    style={{
                      fontSize: '12px',
                      marginTop: '-30px',
                      color: 'gray',
                      fontWeight: 'bold',
                    }}
                  >
                    BUDGET
                  </Typography>
                </div>
                <div className={classes.coinIconContainer}>
                  <div className={classes.coinIcon}>
                    <AttachMoneyIcon />
                  </div>
                </div>
              </div>
              <Typography
                variant="h6"
                style={{
                  fontSize: '35px',
                  fontWeight: 'bold',
                  marginTop: '-25px',
                  marginBottom: '10px',
                }}
              >
                {`Rs.${balance}`}
              </Typography>
              <div className={classes.arrowContainer} style={{ marginTop: '15px' }}>
                <ArrowUpwardIcon />
                <Typography variant="subtitle2">
                {profit ? `${Math.round(profit * 100) / 100}%` : `${Math.round(loss * 100) / 100}%`}
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={{ marginLeft: '20px', color: 'gray' }}
                >
                  In this month
                </Typography>
              </div>
            </CardContent>
          </Card>
          <CustomScrollbarStyle />
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.headingContainer}>
                <div>
                  <Typography
                    variant="subtitle1"
                    style={{
                      fontSize: '12px',
                      marginTop: '-20px',
                      color: 'gray',
                      fontWeight: 'bold',
                    }}
                  >
                    TOTAL CUSTOMERS
                  </Typography>
                </div>
                <div className={classes.contactIconContainer}>
                  <div className={classes.contactIcon}>
                    <PersonIcon />
                  </div>
                </div>
              </div>
              <Typography
                variant="h6"
                style={{
                  fontSize: '35px',
                  fontWeight: 'bold',
                  marginTop: '-20px',
                  marginBottom: '10px',
                }}
              >
                {users}
              </Typography>
              <div className={classes.arrowContainer}>
                <Typography
                  variant="subtitle2"
                  style={{ marginLeft: '10px', color: 'gray' }}
                >
                  In this month
                </Typography>
              </div>
            </CardContent>
          </Card>

          <Card className={classes.card}>
            <CardContent>
              <div className={classes.headingContainer}>
                <div>
                  <Typography
                    variant="subtitle1"
                    style={{
                      fontSize: '12px',
                      marginTop: '-20px',
                      color: 'gray',
                      fontWeight: 'bold',
                    }}
                  >
                    CREDIT
                  </Typography>
                </div>
                <div className={classes.taskProgressIconContainer}>
                  <div className={classes.taskProgressIcon}>
                    <CreditCardIcon />
                  </div>
                </div>
              </div>
              <Typography
                variant="h6"
                style={{
                  fontSize: '35px',
                  fontWeight: 'bold',
                  marginTop: '-20px',
                  marginBottom: '10px',
                }}
              >
              {`Rs.${creditAmount}`}
              </Typography>
              <Typography
                  variant="subtitle2"
                  style={{ marginLeft: '10px', color: 'gray' }}
                >
                  In this month
                </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.headingContainer}>
                <div>
                  <Typography
                    variant="subtitle1"
                    style={{
                      fontSize: '12px',
                      marginTop: '-20px',
                      color: 'gray',
                      fontWeight: 'bold',
                    }}
                  >
                    DEBIT
                  </Typography>
                </div>
                <div className={classes.profitCoinIconContainer}>
                  <div className={classes.profitCoinIcon}>
                    <PriceChangeIcon />
                  </div>
                </div>
              </div>
              <Typography
                variant="h6"
                style={{
                  fontSize: '35px',
                  fontWeight: 'bold',
                  marginTop: '-20px',
                  marginBottom: '10px',
                }}
              >
              {`Rs.${debitAmount}`}
              </Typography>
              <Typography
                  variant="subtitle2"
                  style={{ marginLeft: '10px', color: 'gray' }}
                >
                  In this month
                </Typography>
            </CardContent>
          </Card>
        </div>

        <div className={classes.graphContainer}>
          <div className={classes.graphSection1}>
            <MainGraph data={monthlyRecord} />
          </div>
          <div className={classes.graphSection2}>
            <SideGraph />
          </div>
        </div>

        <div
          style={{
            width: '100%',
            backgroundColor: '#f5f5f5',
            height: '500px',
            marginTop: '50px',
            display: 'flex',
          }}
        >
          <div
            style={{
              width: '50%',
              maxWidth: '700px',
              margin: '0 auto',
              backgroundColor: '#fafafa',
              borderRadius: '20px',
              padding: '20px',
            }}
          >
            <h2
              style={{
                textAlign: 'center',
                marginBottom: '20px',
                color: '#333333',
              }}
            >
              Transactions List
            </h2>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 'bold',
                padding: '10px 15px',
                backgroundColor: '#f0f0f0',
                borderRadius: '10px',
              }}
            >
              <div style={{ flex: '1', marginLeft: '20px' }}>NAME</div>
              <div style={{ flex: '1' }}>DATE</div>
              <div style={{ flex: '1', textAlign: 'right' }}>AMOUNT</div>
            </div>
            <div
              style={{
                maxHeight: '300px',
                overflowY: 'auto',
                marginTop: '10px',
              }}
            >
              {creditRecord.map((transaction, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 15px',
                    borderBottom: '1px solid #e0e0e0',
                  }}
                >
                  <div style={{ flex: '1', marginLeft: '20px' }}>
                    {transaction.source}
                  </div>
                  <div style={{ flex: '1' }}>5/29/2023</div>
                  <div style={{ flex: '1', color: 'green', textAlign: 'right' }}>
                    {transaction.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            width: '50%',
            marginLeft: '40px',
            borderRadius: '20px',
            padding: '20px',
            backgroundColor: '#fafafa',
          }}>
            <h2 style={{
              textAlign: 'center',
              marginBottom: '20px',
              color: '#333333'
            }}>Expenses List</h2>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontWeight: 'bold',
              padding: '10px 15px',
              backgroundColor: '#f0f0f0',
              borderRadius: '10px'
            }}>
              <div style={{ flex: '1', marginLeft: '20px' }}>NAME</div>
              <div style={{ flex: '1' }}>DATE</div>
              <div style={{ flex: '1', textAlign: 'right' }}>AMOUNT</div>
            </div>
            <div style={{
              maxHeight: '300px',
              overflowY: 'auto',
              marginTop: '10px'
            }}>
              {debitRecord.map((expense, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 15px',
                  borderBottom: '1px solid #e0e0e0'
                }}>
                  <div style={{ flex: '1', marginLeft: '20px' }}>{expense.source}</div>
                  <div style={{ flex: '1' }}>2/29/2023</div>
                  <div style={{ flex: '1', color: 'red', textAlign: 'right' }}>-{expense.amount}</div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
