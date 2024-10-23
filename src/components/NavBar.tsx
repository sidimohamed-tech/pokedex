import { useState } from "react";

interface Pokemon {
    name: string;
    imgSrc?: string;
  }
  
  interface NavBarProps {

    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
  }

  function NavBar({setPokemonIndex,pokemonIndex,pokemonList}: NavBarProps){
    // const [pokemonIndex,setPokemonIndex]=useState(0);

  const handleClickback=()=>{
      setPokemonIndex(pokemonIndex -1);

    }
    const handleClicknext=()=>{
      setPokemonIndex(pokemonIndex +1);
    }
    return (
    <div>
    {pokemonIndex > 0 ? <button type="button" onClick={handleClickback}>précedent</button>:<p></p>}
    {pokemonIndex < pokemonList.length - 1 ?<button type="button" onClick={handleClicknext}>Suivant</button>:<p></p>}
    </div>

    );


  }
  export default NavBar;