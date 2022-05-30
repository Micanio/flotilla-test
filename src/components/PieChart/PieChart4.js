//PieChart.js Code
import "./../../styles/pieChart.scss"
import React from 'react';
import { Doughnut} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const edinburghData = {
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
            data: [28.41, 1.43, 36.06, 15.53, 8.22, 0.64]
        }
    ]
}
const edinburghOptions = {
    plugins: {
        title: {
            display:true,
            text: 'Edinburgh 2020',
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
                    data={edinburghData}
                    options={edinburghOptions}
                    id="pieChart"
                />
            </div>
        );
    }
}