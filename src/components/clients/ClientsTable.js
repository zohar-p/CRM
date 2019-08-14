import React from 'react'
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

    return (
        <Container className='ClientsTable'>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <ClientsHeaders />
                    <TableBody>
                    {props.clients.map(c => {return (
                        <ClientRow key={c['_id']} client={c} />
                        )})}
                    </TableBody>
                    
                </Table>
            </Paper>
        </Container>
    )
}

export default ClientsTable

