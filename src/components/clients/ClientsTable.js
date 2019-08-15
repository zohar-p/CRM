import React, { useState, useEffect } from 'react'
import axios from 'axios'
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

    const [clients, setClients] = useState([])    

    useEffect(() => {
        const getAllClients = async () => {
          const allClients = await axios.get('http://localhost:4000/clients')
          setClients(allClients.data)
        }
        getAllClients()
    }, [])

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

