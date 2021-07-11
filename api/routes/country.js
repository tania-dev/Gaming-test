const express = require('express');
const router = express.Router();

const countryController = require('../controllers/country');

router.get('/:countryName', countryController.getCountry);
router.post('/get-countries', countryController.getCountries);

module.exports = router;