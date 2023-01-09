import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage'
import Home from './Components/Home'
//import { useSelector, useDispatch } from 'react-redux';
//import { useEffect, useState } from 'react';
//import { getAllPokemons, searchPokemon, resetSearch } from './Redux/actions';



function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= '/' component={LandingPage}/>
        <Route path= '/home' component={Home}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;


// const { pokemonForNameOrType, pokemons } = useSelector ((state) => state)
//   const dispatch = useDispatch ();
//   const [ input, setInput ] = useState ({name:''})

//   useEffect (() => {
//     dispatch(getAllPokemons());
//   },[]);

//   const handleChange = (event) => {
//     setInput({...input,[event.target.name]:event.target.value})
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault ();
//     dispatch(searchPokemon(input.name));
//   }

//   const showAllPokes = () => dispatch(resetSearch())

//   console.log({pokemons})
//   console.log({pokemonForNameOrType})

/* <form onSubmit={handleSubmit}> 
      <input type="text" name = "name" value = {input.name} onChange={handleChange}/>
      <button type="submit">BUSCAR</button>
      </form>
      <button onClick={ showAllPokes }>Mostrar Todos</button>
      {
        !pokemonForNameOrType ? 
        pokemons?.map((pokemon) => <h4>{pokemon.name}</h4>):
        pokemonForNameOrType.map((pokemon) => <h4>{pokemon.name}</h4>)
      } */