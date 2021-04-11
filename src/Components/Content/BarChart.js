import React from 'react'
import { Bar } from 'react-chartjs-2'

function BarChart() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [
            {
                label: "No.of Student Submitted",
                data: [25, 20, 120],
                borderColor: ['rgba(255,206,86,0.2)', 'rgba(255,206,86,0.2)', 'rgba(255,206,86,0.2)'],
                backgroundColor: ['rgba(255,206,86,0.2)', 'rgba(255,206,86,0.2)', 'rgba(255,206,86,0.2)'],

            },
            {
                label: "No.of Students Not Submittes",
                data: [10, 5, 50],
                borderColor: ['rgba(54,162,235,0.2)', 'rgba(54,162,235,0.2)', 'rgba(54,162,235,0.2)'],
                backgroundColor: ['rgba(54,162,235,0.2)', 'rgba(54,162,235,0.2)', 'rgba(54,162,235,0.2)']

            }

        ]
    }
    return (
        <>

            <div className=" " style={{ marginTop: "15px" }}>
                <div class="card card-style">
                    <h5 class="card-header">Homework Graph</h5>
                    <div class="card-body">
                        <Bar data={data} />
                    </div>
                </div>
            </div>


        </>
    )
}

export default BarChart
