const axios = require("axios");
const { Op } = require('sequelize');
const {Country,Activity}= require("../db")

const getName = async (req,res)=>{
    const {nameB} = req.params;
    try{
        const response = await Country.findAll({where:{name:{ [Op.iLike]: `${nameB}%` } }})
        if(response.length>0){
            const results = response.map(country => ({
                id: country.id,
                name: country.name,
                image: country.image,
                continente: country.continente,
                capital: country.capital,
                subregion: country.subregion,
                area: country.area,
                poblacion: country.poblacion
            }));
            console.log("yo")
            return res.status(200).json(results);
        }else{
            return res.status(404).send("no se encontro el pais")
        }
    }catch(error){
        res.status(500).send(error.message);
    }
}

module.exports={
    getName
}