import React from 'react';
import '../styles/index.css';

const Month = (props) => {
  function handleBold() {
      console.log("bold");
      document.execCommand('bold')
    }
    return(
      <div className="month-wrapper">
        <div className="pink-bar"></div>
        <p className="month">0{props.month+1}</p>
        <p className="month-name">{props.monthName}</p>
        <button onClick={handleBold}><b id="bold">B</b></button>
      </div>

    );
}

export default Month;
