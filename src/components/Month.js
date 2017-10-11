import React from 'react';
import '../styles/index.css';

const Month = (props) => {

    return(
      <div className="month-wrapper">
        <div className="pink-bar">
          <div className="bar" onClick={props.clickLeft}></div>
          <div className="bar"></div>
          <div className="bar" onClick={props.clickRight}></div>
        </div>
        <p className="month">{`0${props.month+1}`.slice(-2)}</p>
        <p className="month-name">{props.monthName}</p>
      </div>

    );
}

export default Month;
