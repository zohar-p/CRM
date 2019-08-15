import React from 'react'
import { TableCell, TableRow} from '@material-ui/core';

function ClientRow(props) {
    return (
        <TableRow className='ClientRow'>
            <TableCell component="th" scope="row">{props.client.name}</TableCell>
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

