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
    this.clickRight=this.clickRight.bind(this);


  }

  componentWillMount() {
    this.getMonth();
  }

  clickRight() {
    const monthArray = this.props.monthArray;
    const nextMonth = this.state.currentMonth + 1
    const nextMonthName = monthArray[nextMonth];
    this.setState({ currentMonth: nextMonth})
    this.setState({ currentMonthName: nextMonthName})

    this.getDays(nextMonth, 2017)
    const date = new Date();

    const firstDay = new Date(date.getFullYear(), nextMonth, 1).getDay();

    this.setState( { firstDay: firstDay })
    console.log(this.state.days);
  }

  getMonth() {
    const monthArray = this.props.monthArray;
    const month = new Date().getMonth();
    const monthName = monthArray[month];
    console.log({month})
    console.log({ monthName })
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
          <div className="date-picker">
            <div className="left-arrow"></div>
            <div className="current-month"></div>
            <div onClick={this.clickRight} className="right-arrow"></div>
          </div>
          <Calendar firstDay={this.state.firstDay} days={this.state.days}/>
          <Offices />
        </div>
    );
  }
}

App.defaultProps = {
  monthArray: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"]
}
export default App;
