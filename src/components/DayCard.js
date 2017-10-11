import React from 'react';
import TextArea from './TextArea';

class DayCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      office: null,
      editing: false,
      active: false
    }

    this.formatNumber=this.formatNumber.bind(this);
    this.renderOffice=this.renderOffice.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.officeClick=this.officeClick.bind(this);
    this.toggleFocus=this.toggleFocus.bind(this);
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
    if (this.state.active) {
      this.setState( {office: office, editing: false, active: false} )
    }
  }


  handleClick(e) {
    const target = e.target;
    const activeState = this.state.active;

    if (activeState && target.className === "text-area") {
      return;
    } else {
      this.setState( {active: !activeState} )
    }
  }

  toggleFocus() {
    const editState = this.state.editing;
    const activeState = this.state.active;
    if (activeState === true && editState === true) {
      this.setState({ active: true, editing: false })
    } else if (activeState === true && editState === false) { 
      this.setState({ editing: true }) // leave active
    } else if (activeState === false && editState === false) {
      this.setState({ active: true, editing: true })
    } else { // activeState === false && editState === true
      this.setState({ editing: true, active: true }) // should only fire on first tab
    }
  }

  formatNumber() {
    let number = this.props.number
    return `0${number}`.slice(-2);
  }

  renderOffice() {
    let visible = this.props.visible;

    if (!visible) {
      return {visibility: "hidden"}
      } else {

        let office = this.state.office;
        switch(office) {
          case "SF":
            return { backgroundColor: "#EE2A7B", color: "white", borderColor: "#EE2A7B"};
          break;

          case "LA":
            return { backgroundColor: "#C12867", color: "white", borderColor: "#C12867"};
          break;

          case "US/GLOBAL":
            return { backgroundColor: "black", color: "white", borderColor: "black"};
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
        className={`dayCard ${this.state.active ? 'active' : ''}`} >
        <div className="dayCard-number"><span style={ (this.state.office == null) ? {backgroundColor: "black"} : {backgroundColor: "white" }} className="dayCard-bar"></span>{this.formatNumber()}</div>
        <TextArea toggleFocus={this.toggleFocus}/>

      </div>
    )
  }
}

export default DayCard;
