function PokemonCard() {
    let pokemon = pokemonList[0];
    let imagevalue=pokemon.imgSrc;
    return (imagevalue ?(<figure><img src={pokemon.imgSrc} alt="Bulbasaur" />
    <figcaption>{pokemon.name}</figcaption></figure>) : <p>???</p> );
    // if(pokemon.imgSrc===undefined)
    // {
    //     return (<p>???</p>);
    // }
    // else
    // {
    //     return (<figure><img src={pokemon.imgSrc} alt="Bulbasaur" />
    // <figcaption>{pokemon.name}</figcaption></figure>);
    // }

  }


  
  export default PokemonCard;

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
