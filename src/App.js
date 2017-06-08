import React, { Component } from 'react';

import Month from './components/Month';
import Calendar from './components/Calendar';
import Offices from './components/Offices';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: null,
      currentMonthName: null,
      days: null,
      firstDay: null
    }

    this.getMonth=this.getMonth.bind(this);

  }

  componentWillMount() {
    this.getMonth();
  }

  getMonth() {
    const monthArray = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
    const month = new Date().getMonth();
    const monthName = monthArray[new Date().getMonth()];
    this.setState({ currentMonth: month})
    this.setState({ currentMonthName: monthName})

    this.getDays(month, 2017)

    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    this.setState( { firstDay: firstDay })
  }

  getDays(month, year) {
    const days = new Date(year, month, 0).getDate();
    this.setState({ days: days})
  }


  render() {
    return (
        <div className="app">
          <Month month={this.state.currentMonth} monthName={this.state.currentMonthName}/>
          <Calendar firstDay={this.state.firstDay} days={this.state.days}/>
          <Offices />
        </div>
    );
  }
}

export default App;
