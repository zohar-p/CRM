import React, { useState, useContext } from 'react'
import SelectInput from './SelectInput'
import Notifier from './../Notifier'
import axios from 'axios'
import { Paper, FormControl, TextField, FormGroup, FormLabel, Button, Container, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { NotifierContext } from '../../App';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2rem',
        height: '100%'
    },
    textField: {
        marginBottom: '1rem'
    },
    btn: {
        marginTop: '2rem'
    }
}))

function AddClientForm(props) {
    const classes = useStyles()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [owner, setOwner] = useState('')
    const {setNotifier, setMsg} = useContext(NotifierContext)

    const formatName = (firstName, lastName) => `${firstName[0].toUpperCase() + firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase() + lastName.slice(1).toLowerCase()}`
    
    const addClient = async () => {
        // const name = formatName(firstName, lastName)
        // const clientInfo = {name, email, country, owner, firstContact: new Date(), emailType: null, sold: false}
        // await axios.post('http://localhost:4000/client', clientInfo)
        setMsg('Client Added')
        setNotifier(true)
        setFirstName('')
        setLastName('')
        setEmail('')
        setCountry('')
        setOwner('')
    }

    return (
        <Paper className={classes.root}>
            <FormControl component='fieldset'>
                <FormLabel component='legend'>Add New Client</FormLabel>
                <FormGroup>
                    <TextField id='first-name-input' value={firstName} onChange={e => setFirstName(e.target.value)} name='first_name' label='First Name' />
                    <TextField id='last-name-input' value={lastName} onChange={e => setLastName(e.target.value)} name='last_name' label='Last Name' />
                    <TextField id='email-input' value={email} onChange={e => setEmail(e.target.value)} name='email_address' label='Email Address' />
                    <TextField id='country-input' value={country} onChange={e => setCountry(e.target.value)} name='country' label='Country' />
                    <SelectInput for='owner' setValue={setOwner}/>
                    <Button className={classes.btn} variant='contained' color='secondary' onClick={addClient}>Add Client</Button>
                </FormGroup>
            </FormControl>
        </Paper>
    )
}

export default AddClientForm
