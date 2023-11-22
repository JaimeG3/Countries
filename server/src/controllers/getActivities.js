const axios = require("axios");
const {Country,Activity}= require("../db")

const getActivities = async (req,res) => {
    try{
    const response = await Activity.findAll()
    return res.status(200).json([response])
}catch(error){
    return res.status(500).json(error.message)
}
}

module.exports={
    getActivities
}