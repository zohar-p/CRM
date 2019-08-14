import React from 'react'
import { TextField } from '@material-ui/core';


function ClientNameInput() {
    return (
        <div>
            <TextField id='client-name-input' name='name' label='Client Name' />            
        </div>
    )
}

export default ClientNameInput
