import React, { useContext } from 'react'
import { ClientsContext } from '../../App'
import { FormatDataContext } from './Analytics'
import { Grid, Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SingleBadge from './SingleBadge'

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: '2rem'
    }
}))

function Badges(props) {
    const classes = useStyles()

    const formatDataSalesByGroup = useContext(FormatDataContext)

    const calcNewClients = () => {
        let newClients
        newClients = props.data.length
        return newClients
    }

    const calcEmailsSent = () => {
        let emailsSent = props.data.filter(d => d.emailType).length
        return emailsSent
    }

    const calcOutstandingClients = () => {
        let outstandingCostumers = props.data.filter(d => !d.sold).length
        return outstandingCostumers
    }
    
    const calcHottestCountry = () => {
        const countriesData = formatDataSalesByGroup('country')
        if(countriesData.length){
            const hottestCountry = countriesData.reduce((a, b) => a.sales > b.sales ? a : b)
            return hottestCountry.group
        }
    }
    
    return (
        <Card className={classes.root}>
            <CardContent>
            <Grid container justify='space-around' spacing={4}>
                <SingleBadge title='New Clients' icon='monetization_on' value={calcNewClients()}/>
                <SingleBadge title='Emails Sent' icon='mail_circle' value={calcEmailsSent()}/>
                <SingleBadge title='Outstanding Clients' icon='group' value={calcOutstandingClients()}/>
                <SingleBadge title='Hottest Country' icon='whatshot' value={calcHottestCountry()}/>
            </Grid>
            </CardContent>
        </Card>
    )
}

export default Badges
