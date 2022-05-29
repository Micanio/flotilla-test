//PieChart.js Code
import "./../../styles/pieChart.scss"
import React from 'react';
import { Doughnut} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const state = {
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
                '#6800B4'
            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
            ],
            data: [45, 34, 80, 72, 38]
        }
    ]
}

export default class PieChart extends React.Component {
    render() {
        return (
            <div className='pieChart'>
                <Doughnut
                    data={state}
                    options={{
                        plugins: {
                            title: {
                                display:true,
                                text:'Flotilla Carbon Footprint Score by Category',
                                font: {
                                    size: 25
                                }
                            },
                            legend:{
                                display:true,
                                position:'right'
                            }
                        }
                    }}
                />
                <div className="buttons">
                    <button className="leeds">Leeds</button>
                    <button className="london">London</button>
                    <button className="edinburgh">Edinburgh</button>
                    <button className="total">Total</button>
                </div>
            </div>
        );
    }
}