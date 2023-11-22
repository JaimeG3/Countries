const axios = require("axios");
const { Op } = require('sequelize');
const {Country,Activity}= require("../db")

const getName = async (req,res)=>{
    const {nameB} = req.params;
    try{
        const response = await Country.findOne({where:{name:{ [Op.iLike]: nameB } },  include: Activity})
        if(response){
            const result = {
                id:response.id,
                name:response.name,
                image: response.image,
                continente: response.continente,
                capital: response.capital,
                subregion: response.subregion,
                area: response.area,
                poblacion: response.poblacion
            }
            console.log("yo")
            return res.status(200).json(result);
        }
    }catch(error){
        res.status(500).send(error.message);
    }
}

module.exports={
    getName
}