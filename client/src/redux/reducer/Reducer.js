import{
    ALL_COUNTRYS,
    ID_COUNTRY,
    SEARCH,
    GET_ACTIVITY,
    FILTER,
    FILTER_ACTIVITY,
}from "../actions/actions-Types"

const initialState = {
    allCountries:[],
    countries:[],
    detail:[],
    search:[],
    activity:[],
    filter:[],
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

         case GET_ACTIVITY:
                return{
                    ...state,
                    activity:action.payload
                }

        case FILTER:
                let filteredContinent = [];
                if (action.payload) {
                    filteredContinent = [...state.allCountries].filter((country) => country.continente === action.payload)
                    } else {
                        filteredContinent = [...state.allCountries]
                    }
                    return {
                        ...state,
                        countries: [...filteredContinent],
                        filter:[...filteredContinent]
                    }

             case FILTER_ACTIVITY:
                let filteredActivity = [];
                if (state.filter && state.filter.length > 0) {
                    filteredActivity = state.filter.filter((country) => country.actividad === action.payload);
                } else {
                    filteredActivity = state.allCountries.filter((country) => country.actividad === action.payload);
                }
                return {
                    ...state,
                    countries: [...filteredActivity],
                };
    

     default:
        return state; 
    }

}
export default Reducer