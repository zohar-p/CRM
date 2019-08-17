import React from 'react'
import { PieChart, Pie, Cell, LabelList, Tooltip, ResponsiveContainer } from 'recharts'
import { Grid, Paper, Typography } from '@material-ui/core'

const colors = ['#1abc9c', '#2ecc71', '#9b59b6', '#34495e', '#f1c40f', '#e67e22', '#e74c3c', '#95a5a6']

function SalesByCountryChart(props) {

    return (
        <Grid item xs={12} md={6}>
            <Paper>
                <Typography variant='h4'>Sales By Country</Typography>
                <ResponsiveContainer width='95%' aspect={1.0/1.0}>
                    <PieChart>
                        <Pie data={props.data} dataKey='sales' nameKey='group' label>
                            <LabelList position="inside" />
                            {props.data.map((country, index) => <Cell key={country.group} fill={colors[index % colors.length]} /> )}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </Paper>
        </Grid>
    )
}

export default SalesByCountryChart
