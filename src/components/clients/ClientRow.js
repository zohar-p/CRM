import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TableBody, TableCell, TableRow} from '@material-ui/core';

function ClientRow(props) {
    return (
        <TableRow className='ClientRow'>
            <TableCell>{props.client.name}</TableCell>
            <TableCell>{props.client.firstContact}</TableCell>
            <TableCell>{props.client.email}</TableCell>
            <TableCell>{props.client.emailType}</TableCell>
            <TableCell>{props.client.country}</TableCell>
            <TableCell>{props.client.owner}</TableCell>
            <TableCell>{props.client.sold}</TableCell>
        </TableRow>
    )
}

export default ClientRow

