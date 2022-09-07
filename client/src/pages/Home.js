import React from 'react';
import { useQuery } from '@apollo/client';

import ProfileList from '../components/ProfileList';
import HTMLFlipBook from "react-pageflip";
import { Container, Button, Link } from 'react-floating-action-button';

import { QUERY_PROFILES } from '../utils/queries';
import SneakerBox from '../images/SNEAKER-PILES.jpeg'
import NikeSB from '../images/NikeSBPile.jpeg'
import KobeTribute from '../images/KobeTribute.jpg'
import KobeSneakers from '../images/KobeSneakers.jpeg'
import JordanJam from '../images/JordanSpaceJam.webp'
import JordanCatalog from '../images/JordanCatalog.png'
import LebronSneakers from '../images/LebronSneakers.png'
import KingJames from '../images/KingJames.png'
import KanyeWest from '../images/Kanye350.jpeg'
import Yeezys from '../images/YeezyPile.jpeg'





const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row ajustify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            // <ProfileList
            //   profiles={profiles}
            //   title="Here's the current roster of friends..."
            // />
            <HTMLFlipBook class="justifyContent-center" width={500} height={700}>
            <div className="ajustify-center demoPage">
              <p>
                <img src={SneakerBox} alt="SneakerBox" />
              </p>
            </div>
            <div className="demoPage">
              <p>
              <img src={NikeSB} alt="NikeSBPile" width={500} height={666} />
              </p>
            </div>
            <div className="demoPage">
              A Tribute to Black Mamba
              <p>
              <img src={KobeTribute} alt="KobeTribute" width={500} height={666} />
              </p>
            </div>
            <div className="demoPage">
              Kobe Jersey and his Sneaker Silhouettes
              <p>
              <img src={KobeSneakers} alt="NikeSBPile" width={500} height={666} />
              </p>
            </div>
            <div className="demoPage">
              Michael Jordan in Space Jam
              <p>
              <img src={JordanJam} alt="NikeSBPile" width={500} height={666} />
              </p>
            </div>
            <div className="demoPage">
              The Air Jordan Sneaker Family
              <p>
              <img src={JordanCatalog} alt="NikeSBPile" width={500} height={666} />
              </p>
            </div>
            <div className="demoPage">
              Lebron James' slam dunk with Miami Heat
              <p>
              <img src={KingJames} alt="NikeSBPile" width={500} height={666} />
              </p>
            </div>
            <div className="demoPage">
              A variety of Lebrons' Silhouettes
              <p>
              <img src={LebronSneakers} alt="NikeSBPile" width={500} height={666} />
              </p>
            </div>
            <div className="demoPage">
              Kanye West rocking Yeezy Boost 350s
              <p>
              <img src={KanyeWest} alt="NikeSBPile" width={500} height={666} />
              </p>
            </div>
            <div className="demoPage">
              A variety of Kanye's sneakers from his partnership with Adidas
              <p>
              <img src={Yeezys} alt="NikeSBPile" width={500} height={666} />
              </p>
            </div>
          </HTMLFlipBook>
      
          )};
          
        </div>

      </div>
    </main>
  );
};

export default Home;
