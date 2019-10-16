import React, { useContext, useState } from 'react'
import { FormatDataContext } from './Analytics'
import TopEmployeesChart from './TopEmployeesChart';
import SalesByCountryChart from './SalesByCountryChart';
import { Grid, Typography, Paper } from '@material-ui/core'
import SelectInput from '../actions/SelectInput';

function Charts() {    

    const formatDataSalesByGroup = useContext(FormatDataContext)
    const [category, setCategory] = useState('owner')


    return (
        <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
            <Paper>
                <Grid container justify="center" alignItems="center" >
                    <Grid item>
                    <Typography variant='h4' display="inline">Sales By</Typography>
                    </Grid>
                    <Grid item>
                    <SelectInput for="category" setValue={setCategory}></SelectInput>
                    </Grid>
                </Grid>
            <TopEmployeesChart data={formatDataSalesByGroup(category.toLowerCase())} />
            </Paper>
        </Grid>
        </Grid>
    )
}

export default Charts
