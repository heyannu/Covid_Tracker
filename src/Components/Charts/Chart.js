import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'
import './Chart.css'

const Charts = ({data:{confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    },[])

    const LineChart = (
        dailyData.length ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: "Infected",
                        borderColor: "#3333ff",
                        fill: true
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: "Deaths",
                        borderColor: "red",
                        backgroundColor: "rgba(255,0,0,0.5)",
                        fill: true
                    }]
                }}
            ></Line>
        ) : null)

    const BarChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(0,0,255,0.5 )', 'rgba(0,255,0,0.5 )', 'rgba(255,0,0,0.5 )'],
                    data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current State in ${country}` }
                }}
            />
        ) : null
    )

    console.log(country)
    return (
        <div className="container1">
            {!country?LineChart:BarChart}
        </div>
    )
}

export default Charts;