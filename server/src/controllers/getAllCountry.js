const axios = require("axios");
const {Country}= require("../db")

const allCountry = async(req,res)=>{
    try{
        const allCountries = await Country.findAll();

        return res.status(200).json(allCountries);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    allCountry
}