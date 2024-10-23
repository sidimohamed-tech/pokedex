interface typeOfProps
{
  pokemon : {name:string;
    imgSrc?:string;}
  
}

function PokemonCard({pokemon} : typeOfProps) {
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

  