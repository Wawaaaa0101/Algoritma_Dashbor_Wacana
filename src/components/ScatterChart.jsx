import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const ScatterChart = ({ data }) => {
  const points = data.map(day => ({ x: day.screenTime, y: (day.focusTime / day.screenTime) * 100 }));
  const chartData = {
    datasets: [{ label: 'Hari: Produktivitas vs Screen Time', data: points, backgroundColor: '#facc15', pointRadius: 6, pointHoverRadius: 9 }]
  };
  return <Scatter data={chartData} options={{ responsive: true, scales: { x: { title: { display: true, text: 'Screen Time (menit)', color: '#9ca3af' }, ticks: { color: '#cbd5e1' } }, y: { title: { display: true, text: 'Productivity Score (%)', color: '#9ca3af' }, ticks: { color: '#cbd5e1' }, min: 40, max: 75 } }, plugins: { tooltip: { callbacks: { label: (ctx) => `Produktivitas: ${ctx.parsed.y.toFixed(1)}% | Screen: ${ctx.parsed.x} menit` } } } }} />;
};
export default ScatterChart;
