import React from 'react'
import { Chart as ChartJS } from "chart.js/auto"
import { Line } from "react-chartjs-2"
import userData from "./data/userData.json";

const Analytics = () => {
    return (
        <div>
            <Line
                data={{
                    labels: userData.map((data) => data.label),
                    datasets: [
                        {
                            label: "Registration",
                            data: userData.map((data) => data.registration),
                            backgroundColor: "#064FF0",
                            borderColor: "#064FF0"
                        },
                        {
                            label: "Referrals",
                            data: userData.map((data) => data.referrals),
                            backgroundColor: "#FF3030",
                            borderColor: "#FF3030"
                        },
                    ]
                }}
                options={{
                    elements: {
                        line: {
                            tension: 0.5,
                        },
                    },
                    plugins: {
                        title: {
                            text: "Last 7 Days: Registration vs Referrals",
                        },
                    },
                }}
            />
        </div>
    )
}

export default Analytics
