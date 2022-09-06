import React from 'react';
import '../../../styles/nike.css'
import Nike1 from '../../../images/air force 1.jpeg'
import AirForce from'../../../images/Reflective air force 1.jpeg'
import Lakers from'../../../images/lakers air force.jpeg'


export default function Nike() {
  return (
    <div class='nike'>
      <h1>Nike</h1>
      <p>
       Nike is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. 
       It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment.
       The company was founded on January 25, 1964, as "Blue Ribbon Sports", by Bill Bowerman and Phil Knight, and officially became Nike, Inc. on May 30, 1971.
      </p>
      <p>
        <img src={Nike1} alt="Air Force 1s" height="250" width="250"/>
      </p>
      <p>
        <img src={AirForce} alt="Special Air Force" height="250" width="250"/>
      </p>
      <p>
        <img src={Lakers} alt="Special Edition" height="250" width="250"/>
      </p>
      <p>
        Nike is a footwear and apparel juggernaut.
        Brand is everything. Everyone talks about "the brand" and image of a company. Nike has more than just a brand-- it has a cult following. 
        Sneaker heads still go crazy over a pair of Nike Dunk style shoes, 
        or even the Air Force Ones, which are still going strong in numerous different colors even though the style was originally introduced way back in the early 80's.
      </p>
    </div>
  );
}
