import{
    ALL_COUNTRYS,
    ID_COUNTRY,
    SEARCH,
}from "../actions/actions-Types"

const initialState = {
    allCountries:[],
    countries:[],
    detail:[],
    search:[]
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

        case SEARCH:
            return{
                ...state,
                countries:action.payload,
                search:action.payload,
            }

     default:
        return state; 
    }

}
export default Reducer