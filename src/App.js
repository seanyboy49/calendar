import React, { Component } from 'react';

import Month from './components/Month';
import Calendar from './components/Calendar';
import Offices from './components/Offices';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: null,
      currentMonth: null,
      currentMonthName: null,
      days: null,
      firstDay: null
    }

    this.getMonth=this.getMonth.bind(this);
    this.clickRight=this.clickRight.bind(this);
    this.clickLeft = this.clickLeft.bind(this);
  }

  componentWillMount() {
    let year = new Date().getFullYear();
    console.log(year)
    this.setState({year: year}, ()=> {this.getMonth()})
  }

  clickRight() {
    this.getMonth(1);
  }

  clickLeft() {
    this.getMonth(-1);
  }

  getMonth(opt) {
    const monthNav = opt || 0;
    console.log(monthNav)
    const date = new Date();
    const monthArray = this.props.monthArray;
    let year = this.state.year;
    console.log(this.state.year)

    let month;
      if (this.state.currentMonth !== null) {
        if (this.state.currentMonth < 11) { // month < 12
         month = this.state.currentMonth + monthNav;
        } else { // reset month to 0 and add a year
          month = 0;
          year = year+1;
          this.setState({year: year + 1});
        }
      } else {
        month = date.getMonth(); // should run on component will mount
      }    

    const monthName = monthArray[month];
    this.setState({ currentMonth: month})
    this.setState({ currentMonthName: monthName})


    this.getDays(month, year)
    const firstDay = new Date(year, month, 1).getDay();
    this.setState({ firstDay: firstDay })

  }

  getDays(month, year) {
    const days = new Date(year, month + 1, 0).getDate(); // third arg is last day of previous month so must add 1 to month
    this.setState({ days: days})
  }


  render() {
    return (
        <div className="app">
          <Month month={this.state.currentMonth} monthName={this.state.currentMonthName}/>
          <div className="date-picker">
          <div onClick={this.clickLeft}className="left-arrow"></div>
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
