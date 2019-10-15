import React, { useState, useEffect, useContext } from 'react'
import { ClientsContext, GetClientsContext, NotifierContext } from './../../App'
import SelectInput from './SelectInput'
import axios from 'axios'
import Select from 'react-select'
import { Paper, FormGroup, FormLabel, Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2rem',
        height: '100%'
    },
    title: {
        marginBottom: '2rem'
    },
    row: {
        marginBottom: '.8rem'
    }
}))


function UpdateClientForm(props) {
    const classes = useStyles()

    const [owner, setOwner] = useState('')
    const [email, setEmail] = useState('')
    const [clientName, setClientName] = useState('')
    const {setNotifier, setMsg} = useContext(NotifierContext)
    const getAllClients = useContext(GetClientsContext)
    const clients = useContext(ClientsContext)
    const clientNames = clients.map(c => { return {value: c.name, label: c.name}})
    
    useEffect(() => {
        getAllClients()
    }, [])

    const updateClient = (action) => {
        let updatedInfo
        if(action === 'transfer'){
            updatedInfo = {owner}
            setMsg(`${clientName} was transfered to ${owner}`)    
            setNotifier(true)
        } else if (action === 'send'){
            updatedInfo = {emailType: email}
            setMsg(`${email} type email was sent to ${clientName}`)    
            setNotifier(true)
        } else if (action === 'sold'){
            updatedInfo = {sold: true}
            setMsg(`${clientName} has purchased the product!`)    
            setNotifier(true)
        }
        axios.put(process.env.REACT_APP_API_URL + '/client/' + clientName, updatedInfo)
    }
    
    return (
        <Paper className={classes.root}>
            <Typography className={classes.title} variant="h4">Update Client</Typography>
            <FormGroup>
                <Select className={classes.row} state={clientName} onChange={clientName => {setClientName(clientName.value)}} defaultValue='Choose Client...' options={clientNames} />
                <Grid container alignItems='center' justify='space-between' className={classes.row}>
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
                <Grid container alignItems='center' justify='space-between' className={classes.row}>
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
