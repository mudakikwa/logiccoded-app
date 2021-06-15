import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import './index.scss';
import ChartGraph from './chart';

export default function QuickFeutures() {
  const QUERY = gql`
    query {
      AllAds {
        _id
        link
      }
    }
  `;
  const [ad, setad] = useState(
    'https://cdn.dribbble.com/users/408980/screenshots/5628115/screenshot_2018-11-30_at_19.22.23.png'
  );
  const { data, loading, error } = useQuery(QUERY);
  console.log(data)
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
          <div className="ads" style={{ backgroundImage: `url('${ad}')` }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
            quos?
          </div>
        </div>
      </div>
    </div>
  );
}
