import React, { useState } from 'react'
import { TextField, FormGroup, FormControl, Paper, FormLabel, Button, Grid, Select, MenuItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ClientNameInput from './ClientNameInput'
import SelectInput from './SelectInput'

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2rem',
        height: '100%'
    },
    formControl: {
        width: '100%',
        height: '100%'
    }
}))


function UpdateClientForm(props) {
    const classes = useStyles()

    const [owner, setOwner] = useState('')
    const [email, setEmail] = useState('')
    
    return (
        <Paper className={classes.root}>
            <FormControl component='fieldset' className={classes.formControl}>
                <FormLabel component='legend'>Update Client</FormLabel>
                <FormGroup>
                    <ClientNameInput />
                    <Grid container alignItems='center' justify='space-between'>
                        <Grid item>
                            <Typography variant='body1'>Transfer Ownership To</Typography>
                        </Grid>
                        <Grid item>
                            <SelectInput for='owner' setValue={setOwner}/>
                        </Grid>
                        <Grid item>
                            <Button className={classes.btn} variant='contained' color='secondary'>Transfer</Button>
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
                            <Button className={classes.btn} variant='contained' color='secondary'>Send</Button>
                        </Grid>
                    </Grid>
                    <Grid container alignItems='center' justify='space-between'>
                        <Grid item>
                            <Typography variant='body1'>Declare Sale</Typography>
                        </Grid>
                        <Grid item>
                        </Grid>
                        <Grid item>
                            <Button className={classes.btn} variant='contained' color='secondary'>Sold!</Button>
                        </Grid>
                    </Grid>
                </FormGroup>
            </FormControl>
        </Paper>
    )
}

export default UpdateClientForm
