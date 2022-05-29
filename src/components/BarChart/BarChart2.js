//BarChart.js Code
import React from 'react';
import {Bar} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const state = {
    labels: ['Energy', 'Water', 'Waste', 'Travel','Postage','Stationery'],
    datasets: [
        {
            label: 'Flotilla Limited - Leeds',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [500, 250, 350, 4000, 6890,4855]
        },
        {
            label: 'Flotilla Limited - London',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [750, 322, 4215, 322, 698, 3500]
        },
        {
            label: 'Flotilla Limited - Edinburgh',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [1500, 6654, 45468, 45645, 5544, 2544]
        },
    ]
}

export default class BarChart extends React.Component {
    render() {
        return (
            <div className='barChart'>
                <Bar
                    data={state}
                    options={{
                        plugins: {
                            title:{
                                display:true,
                                text:'Average Employee Salary per Month',
                                font: {
                                    size:25
                                }
                            },
                            legend:{
                                display:true,
                                position:'right'
                            }
                        }
                    }}
                />
            </div>
        );
    }
}