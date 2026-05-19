import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
  const appAcc = new Map();
  data.forEach(day => {
    Object.entries(day.apps).forEach(([app, mins]) => appAcc.set(app, (appAcc.get(app) || 0) + mins));
  });
  const sorted = Array.from(appAcc.entries()).sort((a,b) => b[1] - a[1]).slice(0,6);
  const chartData = {
    labels: sorted.map(v => v[0]),
    datasets: [{ label: 'Total durasi (menit)', data: sorted.map(v => v[1]), backgroundColor: '#a78bfa', borderRadius: 10 }]
  };
  return <Bar data={chartData} options={{ responsive: true, plugins: { legend: { labels: { color: '#cbd5e1' } } }, scales: { y: { grid: { color: '#334155' }, ticks: { color: '#cbd5e6' } }, x: { ticks: { color: '#cbd5e6' } } } }} />;
};
export default BarChart;
