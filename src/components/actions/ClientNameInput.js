import React from 'react'
import { TextField } from '@material-ui/core';


function ClientNameInput(props) {
    return (
        <div>
            <TextField id='client-name-input' value={props.value} onChange={e => props.setValue(e.target.value)} name='name' label='Client Name' />            
        </div>
    )
}

export default ClientNameInput
