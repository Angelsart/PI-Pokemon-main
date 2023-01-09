    import {
        GET_ALL_POKEMONS,
        GET_ALL_TYPES,
        GET_POKEMONS_DETAILS,
        CREATE_POKEMON,
        SEARCH_POKEMON,
    } from "./actions";


const initialState = {
    pokemons: [],
    pokemonDetails: [],
    types: [],
// ERRORS ----->
    searchError: {},
};

export default function reducer(state = initialState, action){
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state, 
                pokemons: action.payload, 
                searchError: {},
            };
        case GET_ALL_TYPES:
            return{
                ...state,
                types: action.payload,
            };
        case CREATE_POKEMON:
            return {
               ...state,
            };
        case GET_POKEMONS_DETAILS:
            return {
                ...state,
                pokemonDetails: action.payload,
            };
        case SEARCH_POKEMON:
            //let pokemon = state.pokemons.filter(p => p.name === action.payload)
            return {
               ...state,
               pokemons: action.payload,
            };
    
      default: 
      return { ...state };
    }
}
