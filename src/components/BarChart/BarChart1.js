//BarChart.js Code
import "./../../styles/barChart.scss"
import React from 'react';
import {Bar} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);



const state = {
    labels: ['Leeds', 'London', 'Edinburgh', 'Total'],
    datasets: [
        {
            label: 'Year end: 2019',
            backgroundColor: 'rgb(15, 193, 116,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [208, 908, 514, 1703]
        },
        {
            label: 'Year end: 2020',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [80, 411, 90, 582]
        }
    ]
}

export default class BarChart1 extends React.Component {
    render() {
        return (
            <div className='barChart'>
                <Bar
                    data={state}
                    options={{
                        plugins: {
                            title:{
                                display:true,
                                text:'Flotilla Carbon Footprint Score by Location',
                                font: {
                                    size:25
                                }
                            },
                            legend:{
                                display:true,
                                position:'top'
                            }
                        }
                    }}
                />
            </div>
        );
    }
}