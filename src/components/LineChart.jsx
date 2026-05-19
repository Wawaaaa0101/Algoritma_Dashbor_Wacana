import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.date),
    datasets: [{ label: 'Screen Time (menit)', data: data.map(d => d.screenTime), borderColor: '#38bdf8', backgroundColor: 'rgba(56,189,248,0.05)', borderWidth: 3, tension: 0.3, fill: true, pointBackgroundColor: '#c084fc' }]
  };
  return <Line data={chartData} options={{ responsive: true, maintainAspectRatio: true, plugins: { legend: { labels: { color: '#e2e8f0' } } } }} />;
};
export default LineChart;
