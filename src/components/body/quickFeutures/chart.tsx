import React, { useState } from 'react';
import Chart from 'react-apexcharts';

export default function ChartGraph() {
  const [data, setData] = useState({
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisBorder: {
          show: false,
          color: '#78909C',
          height: 1,
          width: '100%',
          offsetX: 0,
          offsetY: 0,
        },
        axisTicks: {
          show: false,
          borderType: 'solid',
          color: '#78909C',
          height: 6,
          offsetX: 0,
          offsetY: 0,
        },
        labels: {
          style: {
            colors: [
              '#ffffff',
              '#ffffff',
              '#ffffff',
              '#ffffff',
              '#ffffff',
              '#ffffff',
              '#ffffff',
              '#ffffff',
            ],
          },
        },
      },
      colors: ['#7171FF', '#E91E63', '#9C27B0'],
      yaxis: {
        labels: {
          style: {
            colors: ['#ffffff'],
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 1,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        radius: 1000,
        enabled: false,
        style: {
          colors: ['#121312', '#E91E63', '#9C27B0'],
        },
      },
      grid: {
        show: false,
      },
      labels: {
        style: {
          colors: ['#ffffff'],
        },
      },
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 25, 50, 49, 21, 70, 51, 90, 100],
      },
    ],
  });
  return (
    <div className="area">
      <Chart
        options={data.options}
        series={data.series}
        type="area"
        width="500"
      />
    </div>
  );
}
