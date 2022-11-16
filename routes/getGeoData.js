const router = require('express').Router();
const { getGeoData } = require('../controllers/getGeoData');

router.get('/geo', getGeoData);

module.exports = router;