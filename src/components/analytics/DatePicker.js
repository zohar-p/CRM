import './DatePicker.scss'
import React from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import moment from 'moment'
import 'react-day-picker/lib/style.css';
import { Typography, Button, Paper } from '@material-ui/core';

export default class Example extends React.Component {
  static defaultProps = {
    numberOfMonths: 1,
  };

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
    this.props.setDates(this.state)
  }

  getInitialState() {
    return {
      from: moment().subtract(1, 'year')._d,
      to: moment()._d,
    };
  }

  async handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    await this.setState(range);
    this.props.setDates(this.state)
  }

  handleResetClick() {
    this.setState(this.getInitialState());
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <Paper className="date-section">
        <Typography display="inline" variant="body1">
          {!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {from &&
            to &&
            `Displaying data from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
        </Typography>
          {from && to && (
              <Button color="secondary" onClick={this.handleResetClick}>
                Reset
              </Button>
          )}
          <div className="daypicker">
            <DayPicker
              className="Selectable"
              numberOfMonths={this.props.numberOfMonths}
              selectedDays={[from, { from, to }]}
              modifiers={modifiers}
              onDayClick={this.handleDayClick}
              />
          </div>
        <Helmet>
          <style>{`
  .Selectable {
    display: block;
    margin: 0 auto;
  }        
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
        </Helmet>
      </Paper>
    );
  }
}