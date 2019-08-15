import React, { useContext, useState } from 'react'
import { OwnersContext, EmailTypesContext } from '../../App.js'
import { Select, MenuItem } from '@material-ui/core';

function SelectInput(props) {
    const owners = useContext(OwnersContext)
    const emailTypes = useContext(EmailTypesContext)
    const options = props.for === 'owner' ? owners : props.for === 'email' ? emailTypes : null

    const [value, setValue] = useState('')

    const changeValue = e => {
        props.setValue(e.target.value)
        setValue(e.target.value)
    }
    
    return (
        <Select value={value} onChange={e => changeValue(e)} displayEmpty name={props.for}>
            <MenuItem value="">
                <em>Choose {props.for[0].toUpperCase() + props.for.slice(1)}</em>
            </MenuItem>
            {options.map(o => {return (
                <MenuItem key={o} value={o}>{o}</MenuItem>
            )})}
        </Select>
    )
}

export default SelectInput
