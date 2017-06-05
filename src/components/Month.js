import React from 'react';
import '../styles/index.css';

const Month = props => {
    return(
      <div className="month-wrapper">
        <div className="pink-bar"></div>
        <p className="month">0{props.month+1}</p>
        <p className="month-name">{props.monthName}</p>
      </div>

    );
}

export default Month;
