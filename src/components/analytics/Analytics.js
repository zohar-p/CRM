import React, { useEffect, useState, useContext } from 'react'
import { GetClientsContext } from '../../App'
import Badges from './Badges'
import Charts from './Charts'
import { Container } from '@material-ui/core'

function Analytics() {

    const getAllClients = useContext(GetClientsContext)

    useEffect(() => {
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
