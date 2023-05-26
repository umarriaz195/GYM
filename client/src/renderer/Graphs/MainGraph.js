import React from 'react';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryLegend, VictoryTooltip } from 'victory';

const MainGraph = () => {
  const data = [
    { month: 'Jan', profit: 1000, loss: -500 },
    { month: 'Feb', profit: 2000, loss: -1000 },
    { month: 'Mar', profit: 1500, loss: -800 },
    { month: 'Apr', profit: 3000, loss: -1500 },
    { month: 'May', profit: 2500, loss: -1200 },
    { month: 'Jun', profit: 4000, loss: -1500 },
    { month: 'July', profit: 3400, loss: -2000 },
    { month: 'Aug', profit: 3000, loss: -1900 },
    { month: 'Sep', profit: 4500, loss: -1200 },
    { month: 'Oct', profit: 1200, loss: -400 },
    { month: 'Nov', profit: 2300, loss: -1100 },
    { month: 'Dec', profit: 1900, loss: -1000 },
  ];

  const profitData = data.map((entry) => ({ month: entry.month, value: entry.profit }));
  const lossData = data.map((entry) => ({ month: entry.month, value: Math.abs(entry.loss) }));

  return (
    <div style={{ height: 500, width: '100%', backgroundColor: '#f5f5f5' }}>
      <VictoryChart domainPadding={20}>
        <VictoryAxis tickValues={data.map((entry) => entry.month)} />
        <VictoryAxis dependentAxis />
        <VictoryBar
          data={profitData}
          x="month"
          y="value"
          style={{ data: { fill: 'blue' } }}
          labelComponent={<VictoryTooltip />}
        />
        <VictoryBar
          data={lossData}
          x="month"
          y="value"
          style={{ data: { fill: 'red' } }}
          labelComponent={<VictoryTooltip />}
        />
      </VictoryChart>
    </div>
  );
};

export default MainGraph;
