// The purpose of this file is to get some data from spacex to use for our API.
const axios = require('axios');

axios.get('https://api.spacexdata.com/v4/roadster')
.then(response => {
    console.log(response.data);
});