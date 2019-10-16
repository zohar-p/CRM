import React, { useContext, useState } from 'react'
import { FormatDataContext } from './Analytics'
import TopEmployeesChart from './TopEmployeesChart';
import SalesByCountryChart from './SalesByCountryChart';
import { Grid, Typography, Paper, Fab, Icon, Button } from '@material-ui/core'
import SelectInput from '../actions/SelectInput';

function Charts() {    

    const formatDataSalesByGroup = useContext(FormatDataContext)
    const [category, setCategory] = useState('owner')
    const [chart, setChart] = useState('pie')


    return (
        <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
            <Paper>
                <Grid container justify="center" alignItems="center" spacing={1}>
                    <Grid item>
                    <Typography variant='h4' display="inline">Sales By</Typography>
                    </Grid>
                    <Grid item>
                    <SelectInput for="category" setValue={setCategory}></SelectInput>
                    </Grid>
                    <Grid item>
                        <Button color="primary" variant="contained" onClick={() => setChart('pie')}>
                            <Icon>pie_chart</Icon>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button color="primary" variant="contained" onClick={() => setChart('bars')}>
                            <Icon>bar_chart</Icon>
                        </Button>
                    </Grid>
                </Grid>
    {chart === 'bars' ?  <TopEmployeesChart data={formatDataSalesByGroup(category.toLowerCase())} /> : chart === 'pie' ? <SalesByCountryChart data={formatDataSalesByGroup(category.toLowerCase())} /> : null }
            </Paper>
        </Grid>
        </Grid>
    )
}

export default Charts
