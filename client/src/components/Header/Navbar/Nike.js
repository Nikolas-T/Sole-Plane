import React from 'react';
import '../../../styles/nike.css'
import '../../../images/air force 1.jpeg'
import '../../../images/Reflective air force 1.jpeg'
import '../../../images/lakers air force.jpeg'


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
        <img src="../../../images/air force 1.jpeg" alt="Air Force 1s"/>
      </p>
      <p>
        <img src="../../../images/Reflective air force 1.jpeg" alt="Special Air Force"/>
      </p>
      <p>
        <img src="../../../images/lakers air force.jpeg" alt="Special Edition"/>
      </p>
    </div>
  );
}
