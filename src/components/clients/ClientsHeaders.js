import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TableCell, TableHead, TableRow} from '@material-ui/core';


function ClientHeaders() {
    return (
        <TableHead className='ClientHeaders'>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>First Contact</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Email Sent</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Owner</TableCell>
                <TableCell>Sold</TableCell>
            </TableRow>
        </TableHead>
    )
}

export default ClientHeaders




