import{
    ALL_COUNTRYS,
    ID_COUNTRY,
    SEARCH,
    GET_ACTIVITY,
    FILTER,
    FILTER_ACTIVITY,
    ORDER_A_Z,
    ORDER_POBLACION,
    FORM,
    HANDLE_ERROR
}from "../actions/actions-Types"

const initialState = {
    allCountries:[],
    countries:[],
    detail:[],
    search:[],
    activity:[],
    filter:[],
    error:null,
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
                error: null,
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
                    filteredActivity = state.filter.filter((country) => country.actividad.split(',').includes(action.payload));
                } else {
                    filteredActivity = state.allCountries.filter((country) => country.actividad.split(',').includes(action.payload));
                }
                return {
                    ...state,
                    countries: [...filteredActivity],
                };
            
        case ORDER_A_Z:
                if (action.payload === 'todos') {
                   const allCopy = [...state.filter];
                return {
                    ...state,
                    countries:[...allCopy]
                }
                 }
                 if (action.payload === 'A') {
                   const result = [...state.countries].sort((a, b) => a.name.localeCompare(b.name));
                   return {
                     ...state,
                     countries: result,
                   };
                 }                  
                else if (action.payload === 'Z') {
                const result = [...state.countries].sort((a, b) => b.name.localeCompare(a.name));
                return {
                  ...state,
                  countries: result,                   
                 };
                  } 

        case ORDER_POBLACION:
            if (action.payload === 'todos') {
                const allCopy = [...state.filter];
             return {
                 ...state,
                 countries:[...allCopy]
             }}
                if (action.payload === 'poblacionMin') {
                const allCopy = [...state.countries];
                const result = allCopy.sort((a, b) => a.poblacion - (b.poblacion));
                return {
                  ...state,
                  countries: [...result]
                  };
                   }
                if (action.payload === 'poblacionMax') {
                const allCopy = [...state.countries];
                const result = allCopy.sort((a, b) => b.poblacion - (a.poblacion));
                return {
                    ...state,
                    countries: [...result]
                    };
                     }
        case FORM:
            return{
                ...state,
                activity:action.payload,
                countries:action.payload,
            }

        case HANDLE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
            
    

        default:
            return state; 
    }

}
export default Reducer