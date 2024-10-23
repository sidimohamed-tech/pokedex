import "./App.css";
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
function App({}) {
  const [pokemonIndex,setPokemonIndex]=useState(0);

  // const handleClickback=()=>{
  //     setPokemonIndex(pokemonIndex -1);

  //   }
  //   const handleClicknext=()=>{
  //     setPokemonIndex(pokemonIndex +1);
  //   }
  
 
 
  return (
<div>

{/* <NavBar pokemon={pokemonList[pokemonIndex]}/> */}
<NavBar setPokemonIndex={setPokemonIndex} pokemonIndex={pokemonIndex} pokemonList ={pokemonList}/>
{/* <NavBar {pokemon}/> */}
<PokemonCard pokemon={pokemonList[pokemonIndex]} />
</div>

 );
}

export default App;

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];