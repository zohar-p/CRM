import React from 'react'
import { PieChart, Pie, Cell, LabelList, Tooltip, ResponsiveContainer } from 'recharts'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '0 auto'
    }
}))

const colors = ['#1abc9c', '#2ecc71', '#9b59b6', '#34495e', '#f1c40f', '#e67e22', '#e74c3c', '#95a5a6']

function SalesByCountryChart(props) {
    const classes = useStyles()

    return (
        <ResponsiveContainer className={classes.root} width='95%' aspect={1.0/1.0}>
            <PieChart>
                <Pie data={props.data} dataKey='sales' nameKey='group' label>
                    <LabelList position="inside" />
                    {props.data.map((country, index) => <Cell key={country.group} fill={colors[index % colors.length]} /> )}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    )
}

export default SalesByCountryChart
