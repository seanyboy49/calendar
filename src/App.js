import React, { Component } from 'react';

import Month from './components/Month';
import Calendar from './components/Calendar';

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
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    this.setState( { firstDay: firstDay })
  }

  getDays(month, year) {
    const days = new Date(year, month, 0).getDate();
    this.setState({ days: days})
  }


  render() {
    return (
        <div>
          <Month month={this.state.currentMonth} monthName={this.state.currentMonthName}/>
          <Calendar days={this.state.days}/>
        </div>
    );
  }
}

export default App;
