import React, { useContext, useState } from 'react'
import { FormatDataContext } from './Analytics'
import TopEmployeesChart from './TopEmployeesChart';
import SalesByCountryChart from './SalesByCountryChart';
import { Grid, Typography, Paper, Icon, Button } from '@material-ui/core'
import SelectInput from '../actions/SelectInput';
import SalesByTimeChart from './SalesByTimeChart';

function Charts() {    

    const formatDataSalesByGroup = useContext(FormatDataContext)
    const [category, setCategory] = useState('owner')
    const [chart, setChart] = useState('pie')


    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <Paper>
                    <Grid container justify="center" alignItems="center" spacing={1}>
                        <Grid item xs={6}>
                        <Typography variant='h4' align="center">Sales By</Typography>
                        </Grid>
                        <Grid item xs={6}>
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
            <Grid item xs={12} md={8}>
                <Paper>
                    <Typography variant="h4" align="center">Sales By Dates</Typography>
                    <SalesByTimeChart data={formatDataSalesByGroup('firstContact')} />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Charts
