import React from 'react'
import { Paper, Grid } from '@material-ui/core'
import SingleChart from './SingleChart'

function Charts() {
    return (
        <Paper>
            <Grid container spacing={3}>
                <SingleChart />
            </Grid>
        </Paper>
    )
}

export default Charts
