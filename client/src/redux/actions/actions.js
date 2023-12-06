import axios from "axios"
import {
    ALL_COUNTRYS ,
    ID_COUNTRY,
    SEARCH,
    GET_ACTIVITY,
    FILTER,
    FILTER_ACTIVITY,
    ORDER_A_Z,
    ORDER_POBLACION,
    FORM,
    HANDLE_ERROR,
    CLEAR_ERROR,
    BACK
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

export const detail = (id) => {
    return async function(dispatch){
        try{
            const response = await axios.get( `http://localhost:3001/countrys/${id}`)
            return dispatch({
                type: ID_COUNTRY,
                payload:response.data,
            })
        }catch(error){
            throw Error (error.message)
        }
    }
}

    export const search = (name) => {
        return async function(dispatch){
            try{
                const response = await axios.get( `http://localhost:3001/country/${name}`)
                return dispatch({
                    type:SEARCH,
                    payload:response.data
                })
            }catch (error) {
                dispatch(handleError(error.message));
              }
            };
    }

    export const getActivity = () => {
        return async function(dispatch){
            try{
                const response = await axios.get( `http://localhost:3001/activity`)
                return dispatch({
                    type:GET_ACTIVITY,
                    payload:response.data
                })
            }catch(error){
                throw Error (error.message)
            }
        }
    }

    export const filterCards = (data) => {
        return { type: FILTER, payload: data }
    }
    
    export const filterActivity = (data) => {
        return { type: FILTER_ACTIVITY, payload: data }
    }

    export const orderAyZ = (order) =>{
        return { type: ORDER_A_Z, payload: order}
    }
    
    export const orderPoblacion = (order) =>{
        return{ type: ORDER_POBLACION, payload: order }
    }

    export const create =(info)=> {
        return async function(dispatch){
            try{
                const response = await axios.post("http://localhost:3001/activity", info)
                return dispatch({
                    type:FORM,
                    payload:response.data
                })
            }catch(error){
                throw Error(error.message)
            }
        }
    }

    export const handleError = (errorMessage) => ({
        type: HANDLE_ERROR,
        payload: errorMessage,
      });

      export const clearError = () => {
        return {
          type: CLEAR_ERROR,
        };
      };
       
      export const navBack = (event) => {
        return {
          type: BACK,
          payload:event
        };
      };
