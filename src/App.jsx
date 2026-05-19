import React from 'react';
import SummaryCards from './components/SummaryCards';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import ScatterChart from './components/ScatterChart';
import Heatmap from './components/Heatmap';
import InsightBox from './components/InsightBox';
import { dailyData } from './data/dummyData';

function App() {
  return (
    <div className="dashboard-container">
      <div className="header">
        <div className="title-section">
          <h1><i className="fas fa-brain"></i> MindTrack (React)</h1>
          <p>Digital Behavior & Dopamine Tracker — fokus vs distraksi</p>
        </div>
        <div className="badge-date">
          <i className="far fa-calendar-alt"></i> 7 hari terakhir · React + Chart.js
        </div>
      </div>
      <SummaryCards data={dailyData} />
      <div className="charts-grid">
        <div className="chart-card"><div className="chart-title"><i className="fas fa-chart-line"></i> Screen Time (menit/hari)</div><LineChart data={dailyData} /></div>
        <div className="chart-card"><div className="chart-title"><i className="fas fa-chart-bar"></i> Top Aplikasi (menit)</div><BarChart data={dailyData} /></div>
        <div className="chart-card"><div className="chart-title"><i className="fas fa-chart-pie"></i> Fokus vs Distraksi</div><PieChart data={dailyData} /></div>
        <div className="chart-card"><div className="chart-title"><i className="fas fa-chart-scatter"></i> Screen Time vs Produktivitas</div><ScatterChart data={dailyData} /></div>
      </div>
      <div className="heatmap-insight">
        <Heatmap />
        <InsightBox data={dailyData} />
      </div>
      <div style={{textAlign:'center', marginTop:'2rem', fontSize:'0.75rem', color:'#4b5563'}}>
        <i className="fas fa-chart-simple"></i> Dashboard React.js | Produktivitas = (Fokus / Total Screen) * 100
      </div>
    </div>
  );
}
export default App;
