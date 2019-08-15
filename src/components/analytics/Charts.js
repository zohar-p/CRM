import React, { useContext } from 'react'
import { ClientsContext } from '../../App'
import { Paper, Grid } from '@material-ui/core'
import TopEmployeesChart from './TopEmployeesChart';
import SalesByCountryChart from './SalesByCountryChart';

function Charts() {

    const data = useContext(ClientsContext)

    const formatDataSalesByGroup = (group) => {
        let SalesPerGroup = {}
        let chartData = []
        data.forEach(d => {
            if(d.sold){
                if(SalesPerGroup[d[group]]) {
                    SalesPerGroup[d[group]]++
                } else {
                    SalesPerGroup[d[group]] = 1
                }
            }
        })

        for(let group in SalesPerGroup){
            chartData.push({group, sales: SalesPerGroup[group]})
        }

        chartData = chartData.sort((a, b) => b.sales - a.sales)
        return chartData
    }

    return (
        <Grid container spacing={3}>
            <TopEmployeesChart data={formatDataSalesByGroup('owner')} />
            <SalesByCountryChart data={formatDataSalesByGroup('country')} />
        </Grid>
    )
}

export default Charts
