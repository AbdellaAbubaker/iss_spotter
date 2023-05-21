const { fetchMyIP } = require('./iss');

const fetchMyIP = function (callback) {
  axios.get('https://api.ipify.org?format=json')
  .then(response => {
    if (response.status !== 200) {
      throw new Error(`Requerst failed with status code ${response.status}`);
    }
    const ip = response.data.ip;
    callback(null, ip);

    })
    .catch(error => {
      callback(error, null);
    });

  }


    dule.exports = {fetchMyIP}

  
  