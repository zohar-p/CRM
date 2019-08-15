import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from '@material-ui/core'
import Badges from './Badges'
import Charts from './Charts'

function Analytics() {

    const [clients, setClients] = useState([])

    useEffect(() => {
        const getAllClients = async () => {
          const allClients = await axios.get('http://localhost:4000/clients')
          setClients(allClients.data)
        }
        getAllClients()
    }, [])
    
    return (
        <Container className='Analytics'>
            <Badges />
            <Charts />
        </Container>
    )
}

export default Analytics
