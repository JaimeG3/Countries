const axios = require("axios");
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
            const asociate = await Country.findOne({ where: { name: temp} });
              await newActivity.addActivity(asociate);
            });
    } return res.status(201).json([newActivity]);
    }catch (error){
        return res.status(500).send(error.message);
    }
}

module.exports = {
    postAct
}