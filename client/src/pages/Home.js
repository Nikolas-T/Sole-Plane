import React from 'react';
import { useQuery } from '@apollo/client';

import ProfileList from '../components/ProfileList';
import HTMLFlipBook from "react-pageflip";

import { QUERY_PROFILES } from '../utils/queries';


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
            <HTMLFlipBook width={300} height={500}>
            <div className="demoPage">
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div className="demoPage">
              Page 2
            </div>
            <div className="demoPage">
              Page 3
            </div>
            <div className="demoPage">
              Page 4
            </div>
          </HTMLFlipBook>
      
          )};
          
        </div>

      </div>
    </main>
  );
};

export default Home;
