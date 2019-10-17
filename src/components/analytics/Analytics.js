import React, { useEffect, useState, useContext, createContext } from 'react'
import { GetClientsContext } from '../../App'
import Badges from './Badges'
import Charts from './Charts'
import DatePicker from './DatePicker'
import axios from 'axios'
import { Container } from '@material-ui/core'
import moment from 'moment'

export const FormatDataContext = createContext()

function Analytics() {

    const [dates, setDates] = useState({})
    const [data, setData] = useState([])


    const formatDataSalesByGroup = (group) => {
        if(!group) {return}
        group = group === 'email type' ? 'emailType' : group

        let SalesPerGroup = {}
        let chartData = []
        const initialData = group === 'firstContact' ? formatDataTime() : data

        initialData.forEach(d => {
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

        chartData = group !== 'firstContact' ? chartData.sort((a, b) => b.sales - a.sales) : chartData
        return chartData
    }

    const formatDataTime = () => {
        const timePeriod = 'MMM YY' // check how much time to determine if to display in days / weeks / months etc..
        return data
            .sort((a,b) => new Date(a.firstContact) - new Date(b.firstContact)) // Sort by date
            .map(d => { // loop and convert to correct time format in order to group
            return {...d, firstContact: moment(d.firstContact).format(timePeriod)}
        })
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
