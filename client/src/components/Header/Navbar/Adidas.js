import React from 'react';
import '../../../styles/adidas.css'
import NMD from '../../../images/AdidasNMD.jpg'
import SuperStar from '../../../images/yeezy-9.webp'
import Pharrell from '../../../images/yeezy-9.webp'
import CR7 from '../../../images/yeezy-9.webp'



export default function Adidas() {
  return (
    <div class='Adidas'>
      <h1>Adidas</h1>
      <p>
      <img src={NMD}  alt="NMD" height="150" width="200" />
      </p>
      <p>
      Starting in a wash room and conquereing the world. They have scored big and sometimes struggled to reach our goals. 
      They have done our best for the best. They have improved and grown. Looking ahead to the future, 
      always remembering where we came from. Adidas reinvented the game again. In addition to its sport performance offering, 
      adidas is the first in the industry to introduce a new lifestyle segment, focusing on sports-inspired streetwear.
      </p>
      <p>
      <img src={SuperStar}  alt="Superstar" height="200" width="240" />
      </p>
      <p>
      <img src={Pharrell}  alt="pharrell" height="300" width="150" />
      </p>
      <p>
      <img src={CR7}  alt="CR7" height="200" width="250" />
      </p>


    </div>
  );
}
