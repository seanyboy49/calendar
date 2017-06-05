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

  // componentWillMount() {
  //   this.renderDays();
  // }

  render() {
    return (
      <section className="calendar-container">
        <ul className="days">
          <li>MONDAY</li>
          <li>TUESDAY</li>
          <li>WEDNESDAY</li>
          <li>THURSDAY</li>
          <li>FRIDAY</li>
          <li>SATURDAY</li>
          <li>SUNDAY</li>
        </ul>
        <section className="numbered-days">
          {this.renderDays()}
        </section>
      </section>

    )
  }
}
export default Calendar;
