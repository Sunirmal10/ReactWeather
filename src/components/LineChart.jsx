import React from 'react'
import {Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
            max: 100,
            grid: {
                display: false,
              },
            ticks: {
                display: false,
            },

        },
        x: {
            grid: {
                color: '#000000',
                z: 10,
            },
            ticks: {
                color: '#000000',
                font: {
                    size: 12,
                    family: 'Poppins',
                    weight: 400,

                }
            }
        }
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const labels = ['23%', '29%', '58%', '75%', '33%', '20%', '73%', '49%'];

  export const data = {
    labels,
    datasets: [
      {
        label: '',
        lineTension: 0,
        fill: true,
        data: [23, 29, 58, 75, 33, 20, 73, 49],
        borderColor: '#5C9CE5',
        backgroundColor: '#5C9CE5',
        pointRadius: 0,
        borderWidth: 1,
      }
    ],
  };

function LineChart() {

  return (
    <div style={{height:'20vmin'}}>
        <Line
        options={options}
        data={data}
        width={745}
        />
    </div>
  )
}

export default LineChart