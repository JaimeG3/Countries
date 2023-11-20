const { Router } = require("express");
const {paises} = require ("../controllers/getAllCountries")
const {getById} = require ("../controllers/getIdCountry.js")

const router = Router();
router.get('/countrys',paises);
router.get('/countrys/:idKey',getById);
module.exports = router;
