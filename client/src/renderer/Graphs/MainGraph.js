import React from 'react';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryLegend, VictoryTooltip } from 'victory';

const MainGraph = ({data}) => {
 const result=[...data]
console.log("data",data)
  const profitData = result.map((entry) => ({ month: entry.month, value: entry.profit }));
  const lossData = result.map((entry) => ({ month: entry.month, value: Math.abs(entry.loss) }));

  return (
    <div style={{ height: 500, width: '100%', backgroundColor: '#f5f5f5' }}>
      <VictoryChart domainPadding={20}>
        <VictoryAxis tickValues={result.map((entry) => entry.month)} />
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
