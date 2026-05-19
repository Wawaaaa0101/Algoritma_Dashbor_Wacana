import React from 'react';

const generateHourIntensity = () => {
  const hours = new Array(24).fill(0);
  for (let h = 0; h < 24; h++) {
    if (h >= 6 && h <= 8) hours[h] = 35;
    else if (h >= 9 && h <= 12) hours[h] = 55;
    else if (h >= 13 && h <= 17) hours[h] = 78;
    else if (h >= 18 && h <= 21) hours[h] = 85;
    else if (h >= 22 && h <= 23) hours[h] = 68;
    else hours[h] = 12;
  }
  hours[20] = 92; hours[14] = 88; hours[22] = 70;
  return hours.map(v => Math.min(100, Math.max(5, Math.floor(v))));
};

const Heatmap = () => {
  const intensities = generateHourIntensity();
  return (
    <div className="heatmap-card">
      <h3><i className="fas fa-fire" style={{color:'#f97316'}}></i> Heatmap Aktivitas (Jam Paling Aktif)</h3>
      <div className="heatmap-grid">
        {intensities.map((intensity, idx) => {
          let bgColor = intensity < 25 ? 'rgba(30,58,138,0.7)' : intensity < 50 ? 'rgba(79,70,229,0.8)' : intensity < 75 ? 'rgba(139,92,246,0.9)' : 'rgba(236,72,153,0.9)';
          return <div key={idx} className="hour-cell" style={{backgroundColor: bgColor, boxShadow: intensity>70?'0 0 4px #f472b6':'none'}} title={`Jam ${idx}:00 - intensitas ${intensity}%`}></div>;
        })}
      </div>
      <div className="hour-labels">{Array.from({length:24}, (_,i) => <span key={i}>{i}</span>)}</div>
      <div style={{fontSize:'0.7rem', marginTop:'12px', textAlign:'center'}}>⬤ intensitas penggunaan digital (0–100%)</div>
    </div>
  );
};
export default Heatmap;
