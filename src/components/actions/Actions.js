import React from 'react'
import { Container ,Grid} from '@material-ui/core'
import AddClientForm from './AddClientForm'
import UpdateClientForm from './UpdateClientForm'

function Actions() {

    
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
