import React from 'react';
import '../../../styles/adidas.css'
import NMD from '../../../images/AdidasNMD.jpg'
import SuperStar from '../../../images/adidasSuperStar.webp'
import Pharrell from '../../../images/pharrell-adidas.jpg'
import CR7 from '../../../images/CR7.jpg'
import AdOrl from '../../../images/lojas-adidas-orlando.jpg'


export default function Adidas() {
  return (
    <div class='Adidas'>
      
      <h1>Adidas</h1>
      <p>
      <img src={NMD} class="ADimage_right" alt="NMD" height="350" width="650" />
      </p>
      <p>
      Starting in a wash room and conquering the world. They have scored big and sometimes struggled to reach our goals. 
      They have done our best for the best. They have improved and grown. Looking ahead to the future, 
      always remembering where we came from. Adidas reinvented the game again. In addition to its sport performance offering, 
      adidas is the first in the industry to introduce a new lifestyle segment, focusing on sports-inspired streetwear.
      </p>
      <p>
      <img src={SuperStar} class="ADimage_left" alt="Superstar" height="400" width="450" />
      
      <img src={Pharrell} class="ADimage_right" alt="pharrell" height="700" width="450" />
      </p>
      <p>
      <img src={CR7} class="ADimage_left" alt="CR7" height="300" width="450" />
      </p>
      <p>Superstar II maintains its original vibe in coated leather and classic rounded shell-toe. 
        While the silhouette lends itself well to new collaborations, colorways and technologies, 
        the simple Superstar will always be the fan favorite.
        </p>
        <p className='passage_left'>
        July 2016, the NMD Human Race - or NMD Hu, for short - was made in 
        collaboration with Pharrell Williams himself. Embroidered with "HUMAN RACE"; 
        across the upper, the 'Yellow' was the first colourway to release, and to this day
        </p>
        <p>
        Without a doubt, Cristiano Ronaldo is one of the most exciting players the beautiful 
        game has ever seen. From his time on Manchester United to Real Madrid to Juventus, 
        he's built a trophy case that rivals anybody in the game. As the first player ever to 
        win every major domestic trophy in England, Spain and Italy, each match jersey he's pulled on
        has become instantly iconic
        </p>


    </div>
  );
}
