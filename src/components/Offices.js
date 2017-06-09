import React from 'react';
import '../styles/index.css';



const Offices = props => {
    return(
      <div className="offices-wrapper">
        <ul className="offices">
          <li data-office="SF"><div style={{backgroundColor: "#EE2A7B"}} className="swatch"></div>SF OFFICE</li>
          <li><div style={{backgroundColor: "#C12867"}} className="swatch"></div>LA OFFICE</li>
          <li><div style={{backgroundColor: "#7D2448"}} className="swatch"></div>NY OFFICE</li>
          <li><div style={{backgroundColor: "black"}} className="swatch"></div>US/GLOBAL OFFICE</li>
        </ul>
      </div>

    );
}

export default Offices;
