/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */



const request = require('request');



const nextISSTimesForMyLocation = function(callback) {
  // Fetch IP address
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }

    // Fetch coordinates using IP address
    fetchCoordsByIP(ip, (error, coords) => {
      if (error) {
        return callback(error, null);
      }

      // Fetch ISS flyover times using coordinates
      fetchISSFlyOverTimes(coords, (error, flyTimes) => {
        if (error) {
          return callback(error, null);
        }

        callback(null, flyTimes);
      });
    });
  });
};

module.exports = { nextISSTimesForMyLocation };
