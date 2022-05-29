//PieChart.js Code
import React from 'react';
import { Doughnut} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const state = {
    labels: ['IT', 'Accounting', 'Human Resource',
        'Cleaning', 'Security'],
    datasets: [
        {
            label: 'department',
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
            <div>


                <Doughnut
                    data={state}
                    options={{
                        title:{
                            display:true,
                            text:'Average Employee Salary According to the Department',
                            fontSize:20
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}
                />
            </div>
        );
    }
}