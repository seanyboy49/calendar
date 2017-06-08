import React from 'react';
import {RIETextArea} from 'riek';

class DayCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      office: null
    }

    this.formatNumber=this.formatNumber.bind(this)
    this.handleInput=this.handleInput.bind(this)
    this.renderOffice=this.renderOffice.bind(this)
  }

  formatNumber() {
    let number = this.props.number
    return number < 10 ? number = '0' + number : number
  }

  handleInput(e) {
    console.log("input", e);
    this.setState(e)
  }

  renderOffice() {
    let office = this.state.office;
    switch(office) {
      case "SF":
      return {backgroundColor: "#EE2A7B", color: "white"};
      break;

      case "LA":
      return {backgroundColor: "#C12867"};
      break;

      case "NY":
      return {backgroundColor: "#7D2448"};
      break;

      case "US/GLOBAL":
      return {backgroundColor: "black"};
      break;

      default:
      return {backgroundColor: "white"};

    }
  }

  render() {
    return (
      <div
        style={ (this.props.visible) ? {visibility: "visible"} : {visibility: "hidden"} } style={this.renderOffice()}
        className="dayCard">
        <div className="dayCard-number"><span style={ (this.state.office == null) ? {backgroundColor: "black"} : {backgroundColor: "white" }} className="dayCard-bar"></span>{this.formatNumber()}</div>
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
