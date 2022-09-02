import { useState, useEffect } from 'react';
import SneakersList from '../SneakersList';

// Import our search method
import searchSneaker from '../utils/API';

const SearchContainer = () => {
  // Declare a new state variable, "results"
  const [results, setResults] = useState([]);

  // Method to get search results and set state
  const searchKicks = async (query) => {
    const response = await searchSneaker(query);
    setResults(response.data.data);
  };

  // We want to run this method when the component first loads so that we have images of kittens to display
  // The second argument is the dependency array. This means that this method will only run when the component first loads
  useEffect(() => {
    searchKicks('');
  }, []);

  return (
    <div>
      {/* Pass our results to the SneakersList component to map over */}
      <SneakersList results={results} />
    </div>
  );
};

export default SearchContainer;