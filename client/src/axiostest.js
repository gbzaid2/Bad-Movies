const Axios = require('axios');

// console.log(Axios.get());
let axiosOptions = {
    method: 'get',
    url: '/movies/search',
    responseType: 'json',
    params: {
        api_key: '55e6257fbef8138896f389ffc16e8c1a',
        language: 'en-US'
    }
}
Axios.defaults.baseURL = 'localhost';
Axios.defaults.port = 3000;
Axios(axiosOptions)
.then(data => {
    console.log(data.data);
})
.catch(err => {
    console.log("errror");
});