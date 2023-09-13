import React from 'react'
import {
    Chart,
    Filler,
    ScriptableContext,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(
    Filler,
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


  
    const data = () => {
        return {
            labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: rawData,
                    borderColor: 'rgb(245 158 11 / 0.6)', // amber: rgb(245 158 11 / 0.7)
                    borderWidth: 2,
                    fill: "origin",
                    backgroundColor: ({chart: {ctx}}) => {
                        const gradient = ctx.createLinearGradient(0, 50, 0, 80);
                        gradient.addColorStop(0, "rgb(245 158 11 / 0.1)"); // amber: rgb(245 158 11 / 0.2)
                        gradient.addColorStop(1, "rgb(245 158 11 / 0)");
                        return gradient;
                    },
                },
            ],
        }
    };
    
    return (
        <Line id="chart" options={options} data={data()} />
    )
}
