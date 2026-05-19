import React from 'react';

const InsightBox = ({ data }) => {
  // hitung jam intensitas tertinggi (sama seperti heatmap)
  const getPeakHours = () => {
    const hours = [12,8,12,8,12,8,12,8,35,55,55,55,78,78,88,78,78,78,85,85,92,85,70,12];
    const maxVal = Math.max(...hours);
    const peaks = hours.reduce((arr, v, i) => v === maxVal ? [...arr, i] : arr, []);
    return peaks.map(h => `${h}:00`).join(', ');
  };
  // aplikasi distraktor
  const appAcc = new Map();
  data.forEach(day => {
    Object.entries(day.apps).forEach(([app, mins]) => appAcc.set(app, (appAcc.get(app) || 0) + mins));
  });
  const sortedApps = Array.from(appAcc.entries()).sort((a,b) => b[1] - a[1]);
  const distractorApps = sortedApps.filter(([app]) => !['VS Code', 'Chrome', 'Slack'].includes(app)).slice(0,2);
  const distractorNames = distractorApps.map(a=>a[0]).join(' & ');
  // produktivitas terbaik/terendah
  let maxProd = -1, minProd = 101, maxDay = '', minDay = '';
  data.forEach(day => {
    const prod = (day.focusTime / day.screenTime) * 100;
    if (prod > maxProd) { maxProd = prod; maxDay = day.date; }
    if (prod < minProd) { minProd = prod; minDay = day.date; }
  });
  const totalScreen = data.reduce((s,d) => s + d.screenTime, 0);
  const totalDist = data.reduce((s,d) => s + d.distractionTime, 0);
  const distPercent = (totalDist / totalScreen * 100).toFixed(1);
  const rekomendasi = distPercent > 45 ? "⚠️ Tingkat distraksi cukup tinggi. Coba teknik Pomodoro." : "✅ Produktivitas baik, pertahankan rutinitas.";
  return (
    <div className="insight-card">
      <h3><i className="fas fa-lightbulb" style={{color:'#facc15'}}></i> Insight Otomatis & Rekomendasi</h3>
      <div className="insight-text">
        <p><i className="fas fa-chart-line"></i> <strong>Jam puncak aktivitas digital:</strong> {getPeakHours()} — intensitas tinggi.</p>
        <p><i className="fas fa-mobile-alt"></i> <strong>Aplikasi paling menyedot perhatian:</strong> {distractorNames} & {sortedApps[0][0]}.</p>
        <p><i className="fas fa-medal"></i> <strong>Produktivitas terbaik:</strong> {maxDay} ({maxProd.toFixed(1)}%) | <strong>Terendah:</strong> {minDay} ({minProd.toFixed(1)}%)</p>
        <p><i className="fas fa-chart-simple"></i> <strong>Total distraksi:</strong> {distPercent}% dari waktu layar.</p>
        <p><i className="fas fa-lightbulb"></i> <strong>Rekomendasi AI:</strong> {rekomendasi} Batasi {distractorNames} pada jam sibuk.</p>
      </div>
    </div>
  );
};
export default InsightBox;
