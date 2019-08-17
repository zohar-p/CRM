import React, { useEffect, useState, useContext, createContext } from 'react'
import { GetClientsContext, ClientsContext } from '../../App'
import Badges from './Badges'
import Charts from './Charts'
import DatePicker from './DatePicker'
import moment from 'moment'
import axios from 'axios'
import { Container } from '@material-ui/core'

export const FormatDataContext = createContext()

function Analytics() {

    const [dates, setDates] = useState({})
    const [data, setData] = useState([])


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
        if(dates.from){
            const clients = axios.get(`http://localhost:4000/clients/?from=${dates.from}&to=${dates.to}`)
            clients.then(res => setData(res.data))
        }
    }, [dates])
    return (
        <Container className='Analytics'>
            <DatePicker setDates={setDates} />
            <FormatDataContext.Provider value={formatDataSalesByGroup}>
                <Badges data={data} />
                <Charts />
            </FormatDataContext.Provider>
        </Container>
    )
}

export default Analytics
