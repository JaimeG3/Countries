import{
    ALL_COUNTRYS,
}from "../actions/actions-Types"

const initialState = {
    allCountries:[],
    countries:[]
}

function Reducer (state = initialState,action  ){
    switch(action.type){
        case ALL_COUNTRYS:
            return{
                ...state,
                countries:action.payload,
                allCountries:action.payload,
            }

     default:
        return state; 
    }

}
export default Reducer