const axios = require("axios");
const {Country}= require("../db")

const paises = async (req,res) => {
    try{
        const response = await axios.get("http://localhost:5000/countries")
        const data = response.data;
        const result = data.map( country =>{
            return {
            id:country.cca3,
            name:country.name.common,
            image: country.flags.png,
            continente: country.continents,
            capital: country.capital || 'Valor Predeterminado',
            subregion: country.subregion,
            area: country.area,
            poblacion: country.population,
          }});
        const dbCountry= await Country.bulkCreate(result)
        console.log("se ingresaron correctamente")
        return  res.status(200).json(dbCountry);
    }catch(error){
        return res.status(500).send(error.message);
    }
}

module.exports = {
    paises
}