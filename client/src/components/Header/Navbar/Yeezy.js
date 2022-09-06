import React from 'react';
import '../../../styles/yeezy.css'
import MXBlue from  '../../../images/yeezyMXBlue.jpg'
import kanye from '../../../images/Screenshot (19).png'
import waveRunner from '../../../images/yeezy-9.webp'
import Boost750 from '../../../images/Boost-750.jpg'

export default function Yeezy() {
  return (
    <div class='yeezy'>
      <h1>YEEZY</h1> 
      <p>
      <img src={MXBlue}  alt="MXBlue" height="400" width="600" />
      </p>
      <p>
      Adidas called the new alliance unprecedented and referred to it as “the most 
      significant partnership ever created between a nonathlete and an athletic brand.”
      The German sporting goods giant and the musician said they were launching Adidas + Kanye West, 
      “a Yeezy-branded entity creating footwear, apparel and accessories for all genders across 
      street and sport.”
      </p>
      <p>
      <img src={kanye}  alt="kanye" height="250" width="150" />
      </p>
      <p>
      <img src={waveRunner}  alt="Wave-Runner" height="150" width="150" />
      </p>
      <p>
      <img src={Boost750}  alt="Boost750" height="250" width="250" />
      </p>
    </div>
    
  );
}
