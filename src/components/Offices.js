import React from 'react';
import '../styles/index.css';



const Offices = props => {
    return(
      <div className="offices-wrapper">
        <ul className="offices">
          <li ><div data-office="SF" style={{backgroundColor: "#EE2A7B"}} className="swatch"></div>SF OFFICE</li>
          <li><div data-office="LA" style={{backgroundColor: "#C12867"}} className="swatch"></div>LA OFFICE</li>
          <li><div data-office="US/GLOBAL" style={{backgroundColor: "black"}} className="swatch"></div>US/GLOBAL OFFICE</li>
        </ul>
      </div>

    );
}

export default Offices;
