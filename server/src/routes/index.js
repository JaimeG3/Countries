const { Router } = require("express");
const {paises} = require ("../controllers/getBulkCountries.js")
const {allCountry}= require("../controllers/getAllCountry.js")
const {getById} = require ("../controllers/getIdCountry.js")
const {getName} = require ("../controllers/getCountryName.js")
const {postAct} = require ("../controllers/postActivity.js" )
const {getActivities} = require ("../controllers/getActivities.js")


const router = Router();
router.get('/Bulk-countrys',paises);
router.get('/countrys',allCountry);
router.get('/countrys/:idKey',getById);
router.get('/country/:nameB',getName);
router.post('/activity',postAct);
router.get('/activity',getActivities);
module.exports = router;
