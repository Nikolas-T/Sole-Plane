import React from 'react';
import '../../../styles/soulplane.css'
import soleplanemerch1 from '../../../images/sole plane merch1.png';
import soleplanemerch2 from '../../../images/sole plane merch 2.png';


export default function SolePlane() {
  return (
    <div class='soulPlane'>
      <h1>Sole Plane</h1>

      <p>
       Merch Coming Soon 2023! You know you want it 👟
      </p>
      <p>
      <img src={soleplanemerch1} alt="merch 1" height="500" width="950"/>
      </p>
      <p>
      <img src={soleplanemerch2} alt="merch 2" height="500" width="1200"/>
      </p>
    </div>
  );
}