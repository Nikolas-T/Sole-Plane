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
      <img src={MXBlue} className="YZYimage_left" alt="MXBlue" height="400" width="600" />
      </p>
      <p>
      Adidas called the new alliance unprecedented and referred to it as “the most 
      significant partnership ever created between a nonathlete and an athletic brand.”
      The German sporting goods giant and the musician said they were launching Adidas + Kanye West, 
      “a Yeezy-branded entity creating footwear, apparel and accessories for all genders across 
      street and sport.”
      </p>
      <p>
      <img src={waveRunner} className="YZYimage_right" alt="Wave-Runner" height="450" width="450" />
      </p>
      <p>
      <img src={kanye} className="YZYimage_left" alt="kanye" height="550" width="400" />
      </p>
      <p>
      "Yeezy Season 1" was released on October 29, 2015, and was the first apparel collection to 
      release from this collaboration. This collection was noted for its stripped-down, 
      ready-to-wear style, which drew on military clothing and flesh-toned colors.
      </p>
      <p>
      <img src={Boost750} className="YZYimage_right" alt="Boost750" height="350" width="350" />
      </p>
    </div>
    
  );
}
