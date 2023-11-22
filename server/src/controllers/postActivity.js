const axios = require("axios");
const {Op} = require("sequelize")
const {Country,Activity}= require("../db")

const postAct = async (req,res) => {
    try{
    const {name,dificultad,duracion,temporada,asPais:pais} = req.body
    const newActivity = await Activity.create({
        name,
        dificultad,
        duracion,
        temporada
    })
    if(pais.length>0){
        pais.map(async (temp) => { 
            const asociate = await Country.findAll({ where: { name:{[Op.iLike]: temp}} });
              await newActivity.setcountry(asociate);
            });
    } return res.status(201).json([newActivity]);
    }catch (error){
        return res.status(500).send(error.message);
    }
}

module.exports = {
    postAct
}