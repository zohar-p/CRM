import React, { useContext } from 'react'
import { ClientsContext } from '../../App'
import { CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { Grid, Paper, Typography } from '@material-ui/core'


function SalesSinceChart(props) {

    const data = useContext(ClientsContext)

    return (
        <Grid item xs={12} md={6}>
            <Paper>
                <Typography variant='h4'>Sales Since</Typography>
                <ResponsiveContainer width='95%' aspect={1.0/1.0}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis datakey='date' />
                        <YAxis />
                        <Line dataKey='sales' />
                    </LineChart>
                </ResponsiveContainer>
            </Paper>
        </Grid>
    )
}

export default SalesSinceChart
