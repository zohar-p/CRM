import React from 'react'
import { Grid, Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SingleBadge from './SingleBadge'

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: '2rem'
    }
}))

function Badges() {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardContent>
            <Grid container justify='space-around' spacing={4}>
                <SingleBadge title='New Clients' icon='monetization_on' />
                <SingleBadge title='Emails Sent' icon='mail_circle' />
                <SingleBadge title='Outstanding Clients' icon='group' />
                <SingleBadge title='Hottest Country' icon='whatshot' />
            </Grid>
            </CardContent>
        </Card>
    )
}

export default Badges
