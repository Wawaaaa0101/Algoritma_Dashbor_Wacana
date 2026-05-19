import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  let totalFocus = 0, totalDistraction = 0;
  data.forEach(day => { totalFocus += day.focusTime; totalDistraction += day.distractionTime; });
  const chartData = {
    labels: ['Waktu Fokus (menit)', 'Waktu Distraksi (menit)'],
    datasets: [{ data: [totalFocus, totalDistraction], backgroundColor: ['#34d399', '#f97316'], borderWidth: 0 }]
  };
  return <Pie data={chartData} options={{ responsive: true, plugins: { legend: { position: 'bottom', labels: { color: '#f1f5f9' } } } }} />;
};
export default PieChart;
