import axios from "axios";
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_ALL_TYPES = "GET_ALL_TYPES";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const GET_POKEMONS_DETAILS = "GET_POKEMONS_ID";
export const SEARCH_POKEMON = "SEARCH_POKEMON";



export function getAllPokemons(){
    return function (dispatch) {
        axios.get("http://localhost:3001/pokemons")
        .then((response) => {
            dispatch({
                type: GET_ALL_POKEMONS,
                payload: response.data,
            });
        })
        .catch((error) => {
            console.log("ERROR DE CONEXIÓN");
        });
    };
}

export function getPokemonsByID(id){
    return async function (dispatch){
        try {
            const pokeDetail = await axios.get(`http://localhost:3001/pokemons/${id}`)
            return dispatch({
                type: GET_POKEMONS_DETAILS,
                payload: pokeDetail.data,
            })
        } catch (error) {
            return {msg: error.message}
        }
    };
}


export function getAllTypes(){
    return function (dispatch){
        axios.get("http://localhost:3001/types")
        .then((response) => {
            dispatch({
                type: GET_ALL_TYPES,
                payload: response.data,
            })
        })
        .catch((error) => {
            console.log("ERROR DE CONEXIÓN");
        })
    };
}

export function createPokemon(payload){
    return async function () {
        const response = await axios.post("http://localhost:3001/pokemons", payload)
       return response;
    }
}

export function searchPokemon(pokeName) {
    return function (dispatch) {
        axios
          .get(`http://localhost:3001/pokemons?name=${pokeName}`)
          .then((response) => {
            dispatch({
              type: SEARCH_POKEMON,
              payload: response.data,
            });
          })
          .catch((error) => {
            console.log(error);
        })
    }
}

export function filterPokemonsByType(payload) {
    return {
      type: "FILTER_BY_TYPE",
      payload,
    };
}

export function Sort(order) {
    return {
      type: "SORT",
      payload: order
    }
}

export function filterCreated(payload) {
    return {
      type: "FILTER_CREATED",
      payload,
    };
}
  
export function filterByAttack(payload) {
    return {
      type: "FILTER_BY_ATTACK",
      payload,
    };
}

