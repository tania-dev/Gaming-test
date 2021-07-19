const axios = require('axios');

const getCountryApi = async (countryName) => {
  try {
    const countryResponse = await axios.get(
      `https://restcountries.eu/rest/v2/name/${countryName}`
    );
    const countryInfo = await countryResponse.data;
    return countryInfo;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getCountryApi,
};
