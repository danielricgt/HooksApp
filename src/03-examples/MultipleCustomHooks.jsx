import { IsLoading } from "../02-use-effect/IsLoading";
import { PokemonCard } from "../02-use-effect/PokemonCard";
import { useCounter, useFetch } from "../hooks"


export const MultipleCustomHooks = () => {

  const { counter, increment, decrease } = useCounter(1);

  const { data, hasError, isLoading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);



  return (
    <>

      <h1>Pokemon Information</h1>


      <hr />
      {isLoading ? <IsLoading /> : <PokemonCard
        id={counter}
        name={data?.name}
        sprites={[
          data.sprites.front_default,
          data.sprites.front_shiny,
          data.sprites.back_default,
          data.sprites.back_shiny,

        ]}
      />}


      <button onClick={() => counter > 1 ? decrease() : null} className="btn btn-primary mt-1">Previous</button>
      <button onClick={() => increment()} className="btn btn-primary mt-1">Next</button>

    </>
  )
}
