import React from 'react'
import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Line, CartesianGrid } from 'recharts'

function SalesByTimeChart(props) {
    return (
        <ResponsiveContainer width="95%" aspect={1.0 / .545}>
            <LineChart data={props.data}>
                <XAxis dataKey="group" />
                <YAxis />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3"/>
                <Line type="monotone" dataKey="sales"/>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default SalesByTimeChart
