import React from 'react'
import { Paper, Grid } from '@material-ui/core'
import SingleChart from './SingleChart'
import TopEmployeesChart from './TopEmployeesChart';

function Charts() {
    return (
        <Grid container spacing={3}>
            <TopEmployeesChart />
            <SingleChart />
        </Grid>
    )
}

export default Charts
