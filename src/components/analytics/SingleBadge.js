import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
    badgeIcon: {
        fontSize: '5rem'
    }
}))

function SingleBadge(props) {

    const classes = useStyles()
    
    return (
        <Grid item xs={6} sm={3}>
            <Grid container direction='column' alignItems='center' spacing={1}>
                <Grid item>
                    <Icon className={classes.badgeIcon} color='secondary' fontSize='large' align='center'>{props.icon}</Icon>
                </Grid>
                <Grid item>
                    <Typography variant='body1' align='center'>{props.title}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='body2' align='center'>{props.value}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SingleBadge
