import React from 'react';
import '../../../styles/jordan.css';
import '../../../images/jordan 1.jpeg';
import '../../../images/jordan 2.jpg';
import '../../../images/Mj.jpeg';


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
        <img src="../../../images/jordan 1.jpeg" alt="Jordan 1s"/>
      </p>
      <p>
        <img src="../../../images/jordan 2.jpg" alt="Jordan 2s"/>
      </p>
      <p>
        <img src="../../../images/Mj.jpeg" alt="MJ"/>
      </p>
    </div>
  );
}