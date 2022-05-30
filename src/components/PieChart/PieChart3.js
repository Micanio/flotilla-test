//PieChart.js Code
import "./../../styles/pieChart.scss"
import React from 'react';
import { Doughnut} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const londonData = {
    labels: ['Energy', 'Water', 'Waste',
        'Travel', 'Postage', 'Stationery'],
    datasets: [
        {
            label: 'Category',
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4',
                '#0C8578'
            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F',
                '#07564d'
            ],
            data: [20.71, 51.58, 36.07, 103.92, 199.00, 0.05]
        }
    ]
}
const londonOptions = {
    plugins: {
        title: {
            display:true,
            text: 'London 2020',
            font: {
                size: 20
            }
        },
        legend:{
            display:true,
            position:'right'
        }
    }
}


export default class PieChart extends React.Component {
    render() {
        return (
            <div className='pieChart'>
                <Doughnut
                    data={londonData}
                    options={londonOptions}
                    id="pieChart"
                />
            </div>
        );
    }
}