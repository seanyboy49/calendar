import React from 'react';
import DayCard from './DayCard';

import '../styles/Calendar.css'

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.renderDays=this.renderDays.bind(this);
  }

  renderDays() {
    const dayArray = [];
    for (var i=1; i < this.props.days; i++) {
      dayArray.push(<DayCard number={i} key={i}/>)
    }
    return dayArray
  }

  render() {
    return (
      <section className="calendar-container">
        <table className="days">
          <thead>
            <th>MONDAY</th>
            <th>TUESDAY</th>
            <th>WEDNESDAY</th>
            <th>THURSDAY</th>
            <th>FRIDAY</th>
            <th>SATURDAY</th>
            <th>SUNDAY</th>
          </thead>
        </table>
        <section className="numbered-days">
          {this.renderDays()}
        </section>
      </section>

    )
  }
}
export default Calendar;
