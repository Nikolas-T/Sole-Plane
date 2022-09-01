const axios = require("axios");

const searchSneaker = {
  method: 'GET',
  url: 'https://sneaker-database-stockx.p.rapidapi.com/mostpopular?',
  headers: {
    'X-RapidAPI-Key': 'a000f2878fmsh20d8dab1d06fb31p1750f8jsncaa43f38c6f0',
    'X-RapidAPI-Host': 'sneaker-database-stockx.p.rapidapi.com'
  }
};

axios.request(searchSneaker).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export default searchSneaker;

export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const addSneaker = (sneakerData, token) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(sneakerData),
  });
};

export const removeSneaker = (sneakerId, token) => {
  return fetch(`/api/users/sneaker/${sneakerId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};