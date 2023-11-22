import axios from "axios"
import {
    ALL_COUNTRYS ,
} from "./actions-Types"

export const allCountrys = () => {
    return async function(dispatch){
        try{
            const response = await axios.get("http://localhost:3001/countrys")
            return dispatch({
                type: ALL_COUNTRYS,
                payload:response.data,
            })
        }catch(error){
            throw Error (error.message)
        }
    }
}