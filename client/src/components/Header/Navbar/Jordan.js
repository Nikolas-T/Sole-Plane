import React from 'react';
import '../../../styles/jordan.css';
import J1 from'../../../images/jordan 1.jpeg';
import J2 from '../../../images/jordan 2.jpg';
import MJ from '../../../images/Mj.jpeg';


export default function Jordan() {
  return (
    <div class='jordan'>
      <h1>Air Jordan</h1>
      <p>
      Air Jordan is a line of basketball shoes and athletic clothing produced by American corporation Nike. 
      The first Air Jordan shoe was produced for Hall of Fame former basketball player 
      Michael Jordan during his time with the Chicago Bulls in late 1984 and released to the public on April 1, 1985.
      The Jordan shoe line was first introduced on  November 17, 1984.
      The brand is owned by Nike and sold world wide.
      </p>
      <p>
        <img src={J1} alt="Jordan 1s" height="250" width="250"/>
      </p>
      <p>
        <img src={J2} alt="Jordan 2s" height="250" width="250"/>
      </p>
      <p>
        <img src={MJ} alt="MJ" height="250" width="250"/>
      </p>
    </div>
  );
}