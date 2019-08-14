import React, { useState, useEffect } from 'react'
import { Container ,Grid, Paper} from '@material-ui/core'
import AddClientForm from './AddClientForm'
import UpdateClientForm from './UpdateClientForm'
import axios from 'axios'

function Actions() {


    // useEffect(async () => {
    //     const allOwners = await axios.get('/owners')
    //     allOwners.forEach(d => {
    //         owners.find(o => o == d.owner) ? null : owners.push(d.owner)
    //     });
    // }, [])
    
    return (
        <Container className='Actions'>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <AddClientForm />
                </Grid>
                <Grid item xs={12} md={6}>
                    <UpdateClientForm />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Actions
