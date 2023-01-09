import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { searchPokemon } from '../Redux/actions';


export default function SearchBar (){
const dispatch = useDispatch()
const [name,setName] = useState("")


return (
    <div>
        <input type="text" placeholder='Search...'/>
        <button type='submit'>Search Pokemon</button>
    </div>
)

}