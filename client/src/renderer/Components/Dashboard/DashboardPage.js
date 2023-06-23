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
import axios from 'axios'
import MenuIcon from '@mui/icons-material/Menu';
import MainGraph from 'renderer/Graphs/MainGraph';
import SideGraph from 'renderer/Graphs/SideGraph';
import useStyles from './Style';
// import { transactions, expenses } from './Data';
import { scrollbarStyle } from 'renderer/Common/scrollbarStyle';


const DashboardPage = () => {
  const classes = useStyles();
  const [balance, setBalance] = useState(null)
  const [profit, setProfit] = useState(null)
  const [loss, setLoss] = useState(null)
  const [users, setUsers] = useState(0)
  const [creditRecord, setCreditRecord] = useState([])
  const [debitRecord, setDebitRecord] = useState([])
  const [monthlyRecord, setMonthlyRecord] = useState([])
  const [yearlyRecord, setYearlyRecord] = useState([])
  // const [,setBalance]=useState(null)

  const result = async () => {
    try {
      const response = await axios.get('http://localhost:7000/owner/dashboard')
      const data = response.data
      console.log(data)
      setBalance(data.balance)
      data.profit > 0 ? setProfit(data.profit) : setLoss(data.loss)
      setUsers(data.users)
      setCreditRecord(data.creditRecord)
      setDebitRecord(data.debitRecord)
      setMonthlyRecord(data.monthlyDetails)
      setYearlyRecord(data.yearlyDetails)
    } catch (e) {
      console.log('an error occurs', e)
    }

  }
  result()
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
                      marginTop: '-20px',
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
                  marginTop: '-15px',
                  // marginBottom: '10px',
                }}
              >
                {`Rs.${balance}`}
              </Typography>
              <div className={classes.arrowContainer}>
                <ArrowUpwardIcon />
                <Typography variant="subtitle2">{profit ? `${profit}%` : `${loss}%`}</Typography>
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
                    <ContactPhoneIcon />
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
                <ArrowDownwardIcon />
                <Typography variant="subtitle2">16%</Typography>
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
                    TASK PROGRESS
                  </Typography>
                </div>
                <div className={classes.taskProgressIconContainer}>
                  <div className={classes.taskProgressIcon}>
                    <MenuIcon />
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
                75.5%
              </Typography>
              <LinearProgress
                variant="determinate"
                value={75}
                style={{ marginTop: '10px' }}
              />
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
                    TOTAL PROFIT
                  </Typography>
                </div>
                <div className={classes.profitCoinIconContainer}>
                  <div className={classes.profitCoinIcon}>
                    <AttachMoneyIcon />
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
                $24k
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className={classes.graphContainer}>
          <div className={classes.graphSection1}>
            <MainGraph data={monthlyRecord}/>
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
              width: '49%',
              borderRadius: '20px',
              padding: '10px',
              backgroundColor: '#fafafa',
            }}
          >
            <h2>Transactions List</h2>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 'bold',
              }}
            >
              <div style={{ marginLeft: '20px' }}>NAME</div>
              <div>DATE</div>
              <div>AMOUNT</div>
            </div>
            <div
              style={{
                width: '100%',
                height: '85%',
                display: 'flex',
                borderRadius: '15px',
                overflowY: 'auto',
                overflowX: 'hidden',
                backgroundColor: 'white',
                border: '1px solid #bdbdbd',
                textTransform: 'uppercase',
                fontSize: '14px'
              }}
            >
              <div style={{ margin: 'auto', maxWidth: '700px' }}>
                {creditRecord.map((transaction, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '450px',
                      padding: '8px 15px',
                      borderBottom: '1px solid #bdbdbd',
                    }}
                  >
                    <div>{transaction.source}</div>
                    {/* <div>{transaction.dateTime}</div> */}
                    <div style={{ color: 'green' }}>
                      {transaction.amount}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              width: '49%',
              backgroundColor: '#f5f5f5',
              marginLeft: '40px',
              borderRadius: '20px',
              padding: '10px',
              backgroundColor: '#fafafa',
            }}
          >
            <h2>Expenses List</h2>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 'bold',
              }}
            >
              <div style={{ marginLeft: '20px' }}>NAME</div>
              <div>DATE</div>
              <div>AMOUNT</div>
            </div>
            <div
              style={{
                width: '100%',
                height: '85%',
                display: 'flex',
                borderRadius: '15px',
                overflowY: 'auto',
                overflowX: 'hidden',
                backgroundColor: 'white',
                border: '1px solid #bdbdbd',
                textTransform: 'uppercase',
                fontSize: '14px'
              }}
            >
              <div style={{ margin: 'auto', maxWidth: '700px' }}>
                {debitRecord.map((expenses, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      width: '450px',
                      padding: '8px 15px',
                      borderBottom: '1px solid #bdbdbd',
                    }}
                  >
                    <div>{expenses.source}</div>
                    {/* <div>{expenses.dateTime}</div> */}
                    <div style={{ color: 'red' }}>
                      {expenses.amount}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
