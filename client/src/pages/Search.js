import React, {useState,} from 'react';
import searchSneaker from '../utils/Api';



const NewKicks = ()=> {
    // state to hold data from api
    const [newKicks, setNewKicks] = useState([]);
    // state to hold search field data
    const [searchInput, setSearchInput] = useState('');


const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchSneaker(searchInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { shoes } = await response.json();

      const sneakerData = shoes.map((sneaker) => ({
        sneakerId: sneaker.id,
        shoeName: sneaker.shoeName || ['No sneakers to display'],
        brand: sneaker.brand,
        retailPrice: sneaker.retailPrice,
        image: sneaker.thumbnail || '',
        releaseDate: sneaker.releaseDate,
        resellLinks: sneaker.resellLinks
      }));

      setNewKicks(sneakerData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };
}

export default NewKicks;