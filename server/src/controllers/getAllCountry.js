const axios = require("axios");
const {Country,Activity}= require("../db")

const allCountry = async(req,res)=>{
    try {
        const allCountries = await Country.findAll({
            include: { model: Activity, as: 'country' }
        });

        // Mapear la respuesta para incluir el nombre del país y la actividad
        const response = allCountries.map(country => ({
            id:country.id,
            name:country.name,
            image: country.image,
            continente: country.continente,
            capital: country.capital,
            subregion: country.subregion,
            area: country.area,
            poblacion: country.poblacion,
            actividad: country['country'].map(act => `${act.name} , ${act.dificultad},  ${act.duracion},  ${act.temporada}`).join(","),
        }));

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    allCountry
}