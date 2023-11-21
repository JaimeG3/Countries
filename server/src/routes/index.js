const { Router } = require("express");
const {paises} = require ("../controllers/getAllCountries")
const {getById} = require ("../controllers/getIdCountry.js")
const {getName} = require ("../controllers/getCountryName.js")


const router = Router();
router.get('/countrys',paises);
router.get('/countrys/:idKey',getById);
router.get('/country/:nameB',getName);
module.exports = router;
