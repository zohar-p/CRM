import React, { useState, useContext } from 'react'
import { OwnersContext, EmailTypesContext } from '../../App.js'
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

    const owners = useContext(OwnersContext)
    const emailTypes = useContext(EmailTypesContext)
    
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
                            <SelectInput options={owners} for='owner'/>
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
                            <SelectInput options={emailTypes} for='email'/>
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
