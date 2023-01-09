import React, { Fragment } from "react";
import {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../Redux/actions"; 
import CardPokemon from "./CardPokemon";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

//Hooks --> useState, useEffect
export default function Home(){

const dispatch = useDispatch()
const allPokemons = useSelector ((state) => state.pokemons)

useEffect (() => {
    dispatch(getAllPokemons());
},[dispatch]);

function handleClick(e){
    e.preventDefault();
    dispatch(getAllPokemons());
}

return (
    <>
    <NavBar/>
    <div>
        <h1>POKEDEX APP</h1>
        <button onClick={e=> {handleClick(e)}}>
            Load all Pokemons
        </button>
        <div>
            <select name="select" className="a-z">
                <option value="Filter">A-Z:</option>
                <option value='asc'>Ascendent</option>
                <option value='desc'>Descendent</option>
            </select>
            <select name="selects" className="attack">
                <option value="Attack">Attack</option>
                <option value="Biggets Attack">Biggets Attack</option>
                <option value="Less Attack">Less Attack</option>
            </select>
            <select>
                <option value="type"> Type </option>
                <option value="normal"> Normal </option>
                <option value="flying"> Flying </option>
                <option value="poison"> Poison </option>
                <option value="ground"> Ground </option>
                <option value="bug"> Bug </option>
                <option value="fire"> Fire </option>
                <option value="water"> Water </option>
                <option value="grass"> Grass </option>
                <option value="electric"> Electric </option>
                <option value="fairy"> Fairy </option>
            </select>
            <select>
                <option value="all"> All Pokemons </option>
                <option value="created"> Created </option>
                <option value="existing"> Existing </option>
            </select>
     {allPokemons?.map((e,i)=>{
        return(
            <div>
                <Link to={"/home/" + e.id}>
                    <CardPokemon name={e.name} types={e.types} image={e.image} key={i}/>
                </Link>
                </div>
            )
    })}
        </div>
    </div>
    </>
);
}


//<Link to= '/pokemons'>Create Pokemon</Link>
