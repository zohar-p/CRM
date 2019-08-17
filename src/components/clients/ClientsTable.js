import React, { useState, useEffect, useContext } from 'react'
import { ClientsContext, GetClientsContext } from '../../App'
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableRow, TableFooter, TablePagination, Paper, Container} from '@material-ui/core';
import ClientsHeaders from './ClientsHeaders';
import ClientRow from './ClientRow';
import TablePaginationActions from './TablePaginationActions';

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
    const getAllClients = useContext(GetClientsContext)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        getAllClients()
    }, [])


  const emptyRows = rowsPerPage - Math.min(rowsPerPage, clients.length - page * rowsPerPage);

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }
    
    return (
        <Container className='ClientsTable'>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <ClientsHeaders />
                    <TableBody>
                    {clients.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(c => {return (
                        <ClientRow key={c['_id']} client={c} />
                        )})}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                colSpan={3}
                                count={clients.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                                }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                </TableFooter>
                </Table>
            </Paper>
        </Container>
    )
}

export default ClientsTable

