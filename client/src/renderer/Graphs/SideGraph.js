import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  chartContainer: {
    height: 424,
    width: '90%',
    borderBottom: '2px solid black',
    boxShadow: 'none',
    padding: 0, // Remove padding
    '& .recharts-wrapper': {
      overflow: 'visible', // Ensure the chart is not clipped
    },
    overflow: 'hidden'
  },
  card: {
    width: '100%',
    marginBottom: '16px',
    boxShadow: 'none',
    backgroundColor: '#f5f5f5'
  },
  labelContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '16px',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '16px',
  },
  labelColor: {
    width: 20,
    height: 20,
    borderRadius: '50%',
    marginRight: '8px',
  },
}));

const SideGraph = () => {
  const classes = useStyles();

  const data = [
    { name: 'Men', value: 35 },
    { name: 'Women', value: 45 },
    { name: 'Staff', value: 20 },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];


  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.chartContainer}>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={80} // Adjust the inner radius to create a donut shape
              outerRadius={120}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        <div className={classes.labelContainer}>
          {data.map((entry, index) => (
            <div className={classes.label} key={`label-${index}`}>
              <div
                className={classes.labelColor}
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></div>
              <Typography variant="body2">{entry.name}</Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};


export default SideGraph;
