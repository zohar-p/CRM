import React, { useContext } from 'react'
import { FormatDataContext } from './Analytics'
import TopEmployeesChart from './TopEmployeesChart';
import SalesByCountryChart from './SalesByCountryChart';
import { Grid } from '@material-ui/core'

function Charts() {    

    const formatDataSalesByGroup = useContext(FormatDataContext)

    return (
        <Grid container spacing={3}>
            <TopEmployeesChart data={formatDataSalesByGroup('owner')} />
            <SalesByCountryChart data={formatDataSalesByGroup('country')} />
        </Grid>
    )
}

export default Charts
