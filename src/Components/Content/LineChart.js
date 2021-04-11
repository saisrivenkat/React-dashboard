import React from 'react'
import { Line } from 'react-chartjs-2'
import Bar from './BarChart'

function LineChart() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: "No.of Students Registered",
                data: [25, 20, 120, 250, 12],
                borderColor: ['rgba(255,206,86,0.2)',],
                backgroundColor: ['rgba(255,206,86,0.2)'],
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
                pointBorderColor: 'rgba(255,206,86,0.2)'
            },
            {
                label: "No.of active users",
                data: [10, 5, 50, 150, 10],
                borderColor: ['rgba(54,162,235,0.2)'],
                backgroundColor: ['rgba(54,162,235,0.2)'],
                pointBackgroundColor: 'rgba(54,162,235,0.2)',
                pointBorderColor: 'rgba(54,162,235,0.2)'
            }

        ]
    }
    return (
        <div className="line-chart row">
            <div className='col-lg-6'>
                <div className=" " style={{ marginTop: "15px" }}>
                    <div class="card">
                        <h5 class="card-header">User Graph</h5>
                        <div class="card-body">
                            <Line data={data} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <Bar />
            </div>
        </div>
    )
}

export default LineChart
