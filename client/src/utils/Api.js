const axios = require("axios");

const searchSneaker = {
  method: 'GET',
  url: 'https://sneaker-database-stockx.p.rapidapi.com/getproducts?',
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
