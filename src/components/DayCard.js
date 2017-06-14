import React from 'react';
import TextArea from './TextArea';

class DayCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      office: null,
      editing: false
    }

    this.formatNumber=this.formatNumber.bind(this);
    this.handleInput=this.handleInput.bind(this);
    this.renderOffice=this.renderOffice.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.officeClick=this.officeClick.bind(this);
    this.toggleFocus=this.toggleFocus.bind(this);
  }

  toggleFocus() {
    const editState = this.state.editing;
    console.log("toggleFocus1", editState);
    this.setState( {editing: !editState} )
    console.log("toggleFocus2", editState);
  }

  componentDidMount() {
    if(this.props.ee) {
      const ee = this.props.ee;
      ee.addListener('officeClick', this.officeClick)
    } else {
      return;
    }
  }

  officeClick(office) {
    if (this.state.editing) {
      this.setState( {office: office, editing: false} )
    }
  }


  handleClick(e) {
    const target = e.target;
    const editState = this.state.editing;

    if (editState && target.className === "text-area") {
      return;
    } else {
      this.setState( {editing: !editState} )
    }
  }

  toggleEditing() {
    var classNames = ["dayCard"]
    if (this.state.editing) {
      classNames.push("editing")
    } else if (classNames.length === 2 && !this.state.editing) {
      classNames.pop()
    }
    return classNames.join(' ');
  }

  formatNumber() {
    let number = this.props.number
    return number < 10 ? number = '0' + number : number
  }

  handleInput(e) {
    console.log("change");
    this.setState(e)
  }

  renderOffice() {
    let visible = this.props.visible;

    if (!visible) {
      return {visibility: "hidden"}
      } else {

        let office = this.state.office;
        switch(office) {
          case "SF":
          return {backgroundColor: "#EE2A7B", color: "white"};
          break;

          case "LA":
          return {backgroundColor: "#C12867", color: "white"};
          break;

          case "US/GLOBAL":
          return {backgroundColor: "black", color: "white"};
          break;

          default:
          return {backgroundColor: "white"};
        }
    }
  }

  render() {
    return (
      <div onClick={this.handleClick}
        style={this.renderOffice()}
        className={this.toggleEditing()} >
        <div className="dayCard-number"><span style={ (this.state.office == null) ? {backgroundColor: "black"} : {backgroundColor: "white" }} className="dayCard-bar"></span>{this.formatNumber()}</div>
        <TextArea onChange={this.handleInput} toggleFocus={this.toggleFocus}/>

      </div>
    )
  }
}
export default DayCard;
