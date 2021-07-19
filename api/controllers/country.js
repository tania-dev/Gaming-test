const countryApi = require('../http/country');

exports.getCountry = async (req, res) => {
  try {
    const countryName = req.params.countryName;
    const country = await countryApi.getCountryApi(countryName);
    res.status(200).json({ country: country[0] });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

exports.getCountries = async (req, res) => {
  try {
    const countriesName = req.body.countries;
    const countries = [];

    for (let countryName of countriesName) {
      let country = await countryApi.getCountryApi(countryName);
      countries.push(country[0]);
    }

    res.status(200).json({ countries });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
