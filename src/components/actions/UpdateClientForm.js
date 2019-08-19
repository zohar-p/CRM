import React, { useState, useEffect, useContext } from 'react'
import { ClientsContext, GetClientsContext } from './../../App'
import SelectInput from './SelectInput'
import axios from 'axios'
import Select from 'react-select'
import { Paper, FormGroup, FormLabel, Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2rem',
        height: '100%'
    }
}))


function UpdateClientForm(props) {
    const classes = useStyles()

    const [owner, setOwner] = useState('')
    const [email, setEmail] = useState('')
    const [clientName, setClientName] = useState('')
    const getAllClients = useContext(GetClientsContext)
    const clients = useContext(ClientsContext)
    const clientNames = clients.map(c => { return {value: c.name, label: c.name}})
    
    useEffect(() => {
        getAllClients()
    }, [])

    const updateClient = (action) => {
        const updatedInfo = action === 'transfer' ? {owner} : action === 'send' ? {emailType: email} : action === 'sold' ? {sold: true} : null
        axios.put('http://localhost:4000/client/' + clientName, updatedInfo)
    }
    
    return (
        <Paper className={classes.root}>
                <FormLabel component='legend'>Update Client</FormLabel>
                <FormGroup>
                    <Select state={clientName} onChange={clientName => {setClientName(clientName.value)}} defaultValue='Choose Client...' options={clientNames} />
                    <Grid container alignItems='center' justify='space-between'>
                        <Grid item>
                            <Typography variant='body1'>Transfer Ownership To</Typography>
                        </Grid>
                        <Grid item>
                            <SelectInput for='owner' setValue={setOwner}/>
                        </Grid>
                        <Grid item>
                            <Button className={classes.btn} onClick={() => updateClient('transfer')} variant='contained' color='secondary'>Transfer</Button>
                        </Grid>
                    </Grid>
                    <Grid container alignItems='center' justify='space-between'>
                        <Grid item>
                            <Typography variant='body1'>Send Email</Typography>
                        </Grid>
                        <Grid item>
                            <SelectInput for='email' setValue={setEmail}/>
                        </Grid>
                        <Grid item>
                            <Button className={classes.btn} onClick={() => updateClient('send')} variant='contained' color='secondary'>Send</Button>
                        </Grid>
                    </Grid>
                    <Grid container alignItems='center' justify='space-between'>
                        <Grid item>
                            <Typography variant='body1'>Declare Sale</Typography>
                        </Grid>
                        <Grid item>
                        </Grid>
                        <Grid item>
                            <Button className={classes.btn} onClick={() => updateClient('sold')} variant='contained' color='secondary'>Sold!</Button>
                        </Grid>
                    </Grid>
                </FormGroup>
        </Paper>
    )
}

export default UpdateClientForm
