import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import './Topnav.scss'

const useStyles = makeStyles(theme => ({
    btn: {
        textDecoration: 'none',

    }
}))

function Topnav() {
    const classes = useStyles()

    return (
        <div className='Topnav'>
            <AppBar position="fixed">
                <Toolbar>
                    <Link className={classes.btn} to='/clients'>
                        <Button>Clients</Button>
                    </Link>
                    <Link className={classes.btn} to='/actions'>
                        <Button>Actions</Button>
                    </Link>
                    <Link className={classes.btn} to='/analytics'>
                        <Button>Analytics</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Topnav
