import React from 'react';
import '../styles/index.css';

const Month = (props) => {

    return(
      <div className="month-wrapper">
        <div className="pink-bar"></div>
        <p className="month">{`0${props.month+1}`.slice(-2)}</p>
        <p className="month-name">{props.monthName}</p>
        {/* <button onClick={handleBold}><b id="bold">B</b></button> */}
      </div>

    );
}

export default Month;
