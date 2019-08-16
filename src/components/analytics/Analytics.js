import React, { useEffect, useState, useContext, createContext } from 'react'
import { GetClientsContext, ClientsContext } from '../../App'
import Badges from './Badges'
import Charts from './Charts'
import { Container } from '@material-ui/core'

export const FormatDataContext = createContext()

function Analytics() {

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

    const getAllClients = useContext(GetClientsContext)

    useEffect(() => {
        getAllClients()
    }, [])
    return (
        <Container className='Analytics'>
            <FormatDataContext.Provider value={formatDataSalesByGroup}>
                <Badges />
                <Charts />
            </FormatDataContext.Provider>
        </Container>
    )
}

export default Analytics
