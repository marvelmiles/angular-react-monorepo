import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export interface IReactDataVisualizer {
  aspect?: number;
  color?: string;
}

const ReactDataVisualizer: React.FC<IReactDataVisualizer> = ({
  aspect = 16 / 9,
  color = '#8884d8',
}) => {
  const data = [
    { name: 'January', Total: 1200 },
    { name: 'February', Total: 2100 },
    { name: 'March', Total: 800 },
    { name: 'April', Total: 1600 },
    { name: 'May', Total: 900 },
    { name: 'June', Total: 1700 },
  ];

  return (
    <ResponsiveContainer width="100%" aspect={aspect}>
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke="gray" />
        <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Total"
          stroke={color}
          fillOpacity={1}
          fill="url(#total)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ReactDataVisualizer;
