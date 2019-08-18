import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import TopnavLink from './TopnavLink';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    active: {
        color: 'white'
    }
}))


function Topnav() {
    const classes = useStyles()

    const [currentPage, setCurrentPage] = useState(0)

    return (
        <div className='Topnav'>
            <AppBar position="fixed">
                <Toolbar>
                    <TopnavLink name='clients' className={currentPage === 'clients' ? classes.active : null} setCurrentPage={setCurrentPage} />
                    <TopnavLink name='actions' className={currentPage === 'actions' ? classes.active : null} setCurrentPage={setCurrentPage} />
                    <TopnavLink name='analytics' className={currentPage === 'analytics' ? classes.active : null} setCurrentPage={setCurrentPage} />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Topnav
