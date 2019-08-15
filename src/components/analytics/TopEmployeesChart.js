import React, { useContext } from 'react'
import { ClientsContext } from '../../App'
import { Grid, Paper } from '@material-ui/core'

function TopEmployeesChart() {

    const data = useContext(ClientsContext)
    let SellsPerOwner = {}
    let chartData = []

    const formatData = () => {
        data.forEach(d => {
            if(d.sold){
                if(SellsPerOwner[d.owner]) {
                    SellsPerOwner[d.owner]++
                } else {
                    SellsPerOwner[d.owner] = 1
                }
            }
        })

        for(let owner in SellsPerOwner){
            chartData.push({owner, sells: SellsPerOwner[owner]})
        }
    }
    formatData()

    return (
        <Paper>
            <Grid item xs={12} md={6}>
             
            </Grid>
        </Paper>
    )
}

export default TopEmployeesChart
