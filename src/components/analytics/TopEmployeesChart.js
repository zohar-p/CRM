import React from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'


function TopEmployeesChart(props) {

    return (
        <ResponsiveContainer width='85%' aspect={1.0/1.0}>
            <BarChart data={props.data}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='group' />
                <YAxis />
                <Tooltip />
                <Bar dataKey='sales' fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default TopEmployeesChart
