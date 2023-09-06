import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    // Title,
    // Tooltip,
    // Legend
);

export default function LineGraph({rawData}) {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                bottom: -20
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            }
        },
        elements: {
            point: {
                radius: 0
            }
        }
    };

    const labels = rawData.map((item, index) => index.toString());
  
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: rawData,
                borderColor: 'rgb(245 158 11 / 0.7)',
                borderWidth: 2,
            },
        ],
    };
    
    return (
        <Line options={options} data={data} />
    )
}
