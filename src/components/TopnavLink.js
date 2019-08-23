import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    btn: {
        textDecoration: 'none',
    },
}))

function TopnavLink(props) {
    const classes = useStyles()
    return (
        <Link className={classes.btn} to={'/' + props.name} onClick={() => props.setCurrentPage(props.name)}>
            <Button className={props.className} disableRipple disableFocusRipple>{props.name.toUpperCase()}</Button>
        </Link>
    )
}

export default TopnavLink
