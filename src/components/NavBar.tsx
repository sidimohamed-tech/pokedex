
import PokemonCard from "./PokemonCard";
import { useState } from "react";

interface Pokemon {
    name: string;
    imgSrc?: string;
    pokemon : {name:string;
      imgSrc?:string;}
}
  
interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}


  
  function NavBar({setPokemonIndex,pokemonIndex,pokemonList}: NavBarProps){
   
    console.log(pokemonIndex)
    return (
   
    <div>
        {pokemonList
        .map((article, index) => (
          <button type="button" onClick={() => setPokemonIndex(index)} >{article.name}</button>      
        ))}
    </div>
    );


  }
  export default NavBar;