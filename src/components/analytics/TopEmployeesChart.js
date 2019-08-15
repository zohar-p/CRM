import React, { useContext } from 'react'
import { ClientsContext } from '../../App'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { Grid, Paper, Typography } from '@material-ui/core'


function TopEmployeesChart(props) {

    // const data = useContext(ClientsContext)
    let SalesPerOwner = {}
    let chartData = []

    return (
        <Grid item xs={12} md={6}>
            <Paper>
                <Typography variant='h4'>Top Employees</Typography>
                <ResponsiveContainer width='95%' aspect={1.0/1.0}>
                    <BarChart data={props.data}>
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='group' />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey='sales' fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </Paper>
        </Grid>
    )
}

export default TopEmployeesChart
