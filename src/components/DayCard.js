import React from 'react';
import {RIETextArea} from 'riek';

class DayCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      office: null,
      visible: null
    }

    this.formatNumber=this.formatNumber.bind(this)
    this.handleInput=this.handleInput.bind(this)
  }

  formatNumber() {
    let number = this.props.number
    return number < 10 ? number = '0' + number : number
  }

  handleInput(e) {
    console.log("input", e);
    this.setState(e)
  }

  render() {
    return (
      <div style={ (this.state.visible) ? {visibility: "visible"} : {visibility: "hidden"} } className="dayCard">
        <div className="dayCard-number">{this.formatNumber()}</div>
        <RIETextArea
          className="text-area"
          value={this.state.content}
          propName="content"
          change={this.handleInput}
        />
      </div>
    )
  }
}
export default DayCard;
