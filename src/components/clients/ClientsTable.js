import React, { useState, useEffect, useContext } from 'react'
import { ClientsContext } from '../../App'
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, Paper, Container} from '@material-ui/core';
import ClientsHeaders from './ClientsHeaders';
import ClientRow from './ClientRow';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        overflowX: 'auto'
    },
    table: {
        minWidth: 650
    }
}))

function ClientsTable(props) {
    const classes = useStyles()

    const clients = useContext(ClientsContext)
    
    return (
        <Container className='ClientsTable'>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <ClientsHeaders />
                    <TableBody>
                    {clients.map(c => {return (
                        <ClientRow key={c['_id']} client={c} />
                        )})}
                    </TableBody>
                    
                </Table>
            </Paper>
        </Container>
    )
}

export default ClientsTable

