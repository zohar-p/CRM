import React from 'react'
import { Container } from '@material-ui/core'
import Badges from './Badges'
import Charts from './Charts'

function Analytics() {
    return (
        <Container className='Analytics'>
            <Badges />
            <Charts />
        </Container>
    )
}

export default Analytics
