import NavBar from "./NavBar";
interface typeOfProps
{
  pokemon : {
    name:string;
    imgSrc?:string;
  }
}

function PokemonCard({pokemon} : typeOfProps) {
    console.log(pokemon);
    let imagevalue = pokemon.imgSrc;
    return (
      imagevalue 
      ? 
      (
      <figure>
        <img src={pokemon.imgSrc} alt="Bulbasaur" />
        <figcaption>{pokemon.name}</figcaption>
      </figure>
      ) 
      : 
      <p>???</p> 
    );

  }


  
  export default PokemonCard;