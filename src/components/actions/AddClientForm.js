import React from 'react'
import { Paper, FormControl, TextField, FormGroup, FormLabel, Button, Container} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

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

function AddClientForm() {
    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <FormControl component='fieldset'>
                <FormLabel component='legend'>Add New Client</FormLabel>
                <FormGroup>
                    <TextField id='first-name-input' name='name' label='First Name' />
                    <TextField id='last-name-input' name='name' label='Last Name' />
                    <TextField id='email-input' name='name' label='Email Address' />
                    <TextField id='country-input' name='name' label='Country' />
                    <TextField id='owner-input' name='name' label='Owner' />
                    <Button className={classes.btn} variant='contained' color='secondary'>Add Client</Button>
                </FormGroup>
            </FormControl>
        </Paper>
    )
}

export default AddClientForm
