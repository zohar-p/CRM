import React from 'react'
import { Paper, FormControl, TextField} from '@material-ui/core'

function AddClientForm() {
    return (
        <Paper>
            <FormControl>
                <TextField id='first-name-input' name='name' label='First Name' />
                <TextField id='first-name-input' name='name' label='Last Name' />
                <TextField id='first-name-input' name='name' placeholder='First Name' />
                <TextField id='first-name-input' name='name' placeholder='First Name' />
                <TextField id='first-name-input' name='name' placeholder='First Name' />
                <TextField id='first-name-input' name='name' placeholder='First Name' />
                <TextField id='first-name-input' name='name' placeholder='First Name' />
            </FormControl>
        </Paper>
    )
}

export default AddClientForm
