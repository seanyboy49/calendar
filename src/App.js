import React, { Component } from 'react';
import './App.css';

import Month from './components/Month';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: null,
      days: null
    }

    this.getMonth=this.getMonth.bind(this);

  }

  getMonth() {
    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const month = monthArray[new Date().getMonth()];
    console.log(month);
    this.setState({ currentMonth: month})
  }

  render() {
    return (
        <div>
          <button onClick={this.getMonth}>Click</button>
          <Month month={this.state.currentMonth}/>
        </div>
    );
  }
}

export default App;
