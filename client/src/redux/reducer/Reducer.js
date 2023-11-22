import{
    ALL_COUNTRYS,
    ID_COUNTRY,
}from "../actions/actions-Types"

const initialState = {
    allCountries:[],
    countries:[],
    detail:[]
}

function Reducer (state = initialState,action  ){
    switch(action.type){
        case ALL_COUNTRYS:
            return{
                ...state,
                countries:action.payload,
                allCountries:action.payload,
            }
            
        case  ID_COUNTRY:
            return{
                ...state,
                detail:action.payload,
            }

     default:
        return state; 
    }

}
export default Reducer