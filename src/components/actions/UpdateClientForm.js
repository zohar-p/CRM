import React from 'react'
import { TextField, FormGroup, FormControl, Paper, FormLabel, Button, Grid, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ClientNameInput from './ClientNameInput'

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

function UpdateClientForm() {
    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <FormControl component='fieldset' className={classes.formControl}>
                <FormLabel component='legend'>Update Client</FormLabel>
                <FormGroup>
                    <ClientNameInput />
                    <Grid container alignItems='center' justify='space-between'>
                        <Grid item>
                            <div>Transfer ownership to</div>
                        </Grid>
                        <Grid item>
                            <Select value='' onChange='' displayEmpty name="owner">
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item>
                            <Button className={classes.btn} variant='contained' color='secondary'>Transfer</Button>
                        </Grid>
                    </Grid>
                    <Grid container alignItems='center' justify='space-between'>
                        <Grid item>
                            <div>Transfer ownership to</div>
                        </Grid>
                        <Grid item>
                            <TextField id='first-name-input' name='name' label='Owner'/>
                        </Grid>
                        <Grid item>
                            <Button className={classes.btn} variant='contained' color='secondary'>Add Client</Button>
                        </Grid>
                    </Grid>
                    <Grid container alignItems='center' justify='space-between'>
                        <Grid item>
                            <div>Transfer ownership to</div>
                        </Grid>
                        <Grid item>
                            <TextField id='first-name-input' name='name' label='Owner'/>
                        </Grid>
                        <Grid item>
                            <Button className={classes.btn} variant='contained' color='secondary'>Add Client</Button>
                        </Grid>
                    </Grid>
                </FormGroup>
            </FormControl>
        </Paper>
    )
}

export default UpdateClientForm
