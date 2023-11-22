const axios = require("axios");
const {Country,Activity}= require("../db")

const getById = async (req,res) => {
    const {idKey} = req.params;
    try{
        if (idKey.length === 3){//findOne({ where: { id: idKey }, include: { model: Activity } });
        const response = await Country.findByPk(idKey, { include: { model: Activity , as: 'country' } })
        if(response){
            const result = {
                id:response.id,
                name:response.name,
                image: response.image,
                continente: response.continente,
                capital: response.capital,
                subregion: response.subregion,
                area: response.area,
                poblacion: response.poblacion,
                actividad: response['country'].map(act => act.name).join(",")
            }
            console.log("yo")
            return res.status(200).json(result);
        }}
        
    }catch(error)
    {
        res.status(500).send(error.message);
    }
}

module.exports={
    getById
}