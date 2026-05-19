import React from 'react';

const SummaryCards = ({ data }) => {
  let totalScreen = 0, totalFocus = 0, totalDistraction = 0;
  data.forEach(day => {
    totalScreen += day.screenTime;
    totalFocus += day.focusTime;
    totalDistraction += day.distractionTime;
  });
  const productivity = (totalFocus / totalScreen) * 100;
  const formatMins = (mins) => `${Math.floor(mins/60)}j ${mins%60}m`;
  return (
    <div className="cards-grid">
      <div className="card"><div className="card-icon"><i className="fas fa-tv"></i></div><h3>Total Screen Time</h3><div className="value">{formatMins(totalScreen)}<span className="unit"> (7 hari)</span></div></div>
      <div className="card"><div className="card-icon"><i className="fas fa-bullseye"></i></div><h3>Waktu Fokus</h3><div className="value">{formatMins(totalFocus)}<span className="unit"> fokus</span></div></div>
      <div className="card"><div className="card-icon"><i className="fas fa-brain"></i></div><h3>Waktu Distraksi</h3><div className="value">{formatMins(totalDistraction)}<span className="unit"> distraksi</span></div></div>
      <div className="card"><div className="card-icon"><i className="fas fa-chart-simple"></i></div><h3>Productivity Score</h3><div className="value">{productivity.toFixed(1)}<span className="unit"> %</span></div></div>
    </div>
  );
};
export default SummaryCards;
