import React from 'react'
import { TableCell, TableRow, Icon} from '@material-ui/core';
import './ClientRow.scss'

function ClientRow(props) {

    const openPopup = () => {
        props.openPopup(props.client.name, props.client.country)
    }
    
    return (
        <TableRow className='ClientRow' onClick={openPopup}>
            <TableCell component="th" scope="row">{props.client.name}</TableCell>
            <TableCell>{props.client.firstContact}</TableCell>
            <TableCell>{props.client.email}</TableCell>
            <TableCell>{props.client.emailType ? props.client.emailType : '-'}</TableCell>
            <TableCell>{props.client.country}</TableCell>
            <TableCell>{props.client.owner}</TableCell>
            <TableCell>{props.client.sold ? <Icon>check</Icon> : <Icon>clear</Icon> }</TableCell>
        </TableRow>
    )
}

export default ClientRow

