import React from 'react';
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
import MenuIcon from '@mui/icons-material/Menu';
import MainGraph from 'renderer/Graphs/MainGraph';
import SideGraph from 'renderer/Graphs/SideGraph';
import useStyles from './Style';
import { transactions, expenses } from './Data';
import { scrollbarStyle } from 'renderer/Common/scrollbarStyle';

const DashboardPage = () => {
  const classes = useStyles();

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
                  marginTop: '-30px',
                  marginBottom: '10px',
                }}
              >
                $24k
              </Typography>
              <div className={classes.arrowContainer}>
                <ArrowUpwardIcon />
                <Typography variant="subtitle2">12%</Typography>
                <Typography
                  variant="subtitle2"
                  style={{ marginLeft: '20px', color: 'gray' }}
                >
                  Since last month
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
                $1.6k
              </Typography>
              <div className={classes.arrowContainer}>
                <ArrowDownwardIcon />
                <Typography variant="subtitle2">16%</Typography>
                <Typography
                  variant="subtitle2"
                  style={{ marginLeft: '10px', color: 'gray' }}
                >
                  Since last month
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
            <MainGraph />
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
                overflow: 'auto',
                backgroundColor: 'white',
                border:'1px solid #bdbdbd',
              }}
            >
              <div style={{ margin: 'auto', maxWidth: '700px' }}>
                {transactions.map((transaction, index) => (
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
                    <div>{transaction.customerName}</div>
                    <div>{transaction.dateTime}</div>
                    <div style={{ color: 'green' }}>
                      {transaction.paidAmount}
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
                overflow: 'auto',
                backgroundColor: 'white',
                border:'1px solid #bdbdbd',
              }}
            >
              <div style={{ margin: 'auto', maxWidth: '700px' }}>
                {expenses.map((expenses, index) => (
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
                    <div>{expenses.customerName}</div>
                    <div>{expenses.dateTime}</div>
                    <div style={{ color: 'red' }}>
                      {expenses.paidAmount}
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
