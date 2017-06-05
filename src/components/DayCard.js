import React from 'react';

class DayCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
      office: null
    }

    this.formatNumber=this.formatNumber.bind(this)
  }

  formatNumber() {
    let number = this.props.number
    return number < 10 ? number = '0' + number : number
  }


  render() {
    return (
      <div className="dayCard">
        <div className="dayCard-number">{this.formatNumber()}</div>
        <input></input>
      </div>
    )
  }
}
export default DayCard;
