import React from 'react';
import './index.scss';
import ChartGraph from './chart';

export default function QuickFeutures() {
  return (
    <div id="quickFeutures">
      <div>
        <h1>The Statics</h1>
        <h5>Daily Statics And Performance Metrics</h5>
        <div className="chart">
          <h5>Usage Statics</h5>
          <h6>Lorem ipsum dolor sit amet, consetetur.</h6>
          <div className="chart-data">
            <ChartGraph />
          </div>
          <div className="ads">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
            quos?
          </div>
        </div>
      </div>
    </div>
  );
}
