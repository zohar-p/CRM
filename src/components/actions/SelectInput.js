import React, { useContext, useState } from 'react'
import { Select, MenuItem } from '@material-ui/core';

function SelectInput(props) {

    const [options, setOptions] = useState('')
    
    return (
        <Select value={options} onChange={e => setOptions(e.target.value)} displayEmpty name={props.for}>
            <MenuItem value="">
                <em>Choose {props.for[0].toUpperCase() + props.for.slice(1)}</em>
            </MenuItem>
            {props.options.map(o => {return (
                <MenuItem key={o} value={o}>{o}</MenuItem>
            )})}
        </Select>
    )
}

export default SelectInput
