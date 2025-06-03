import { useFetch } from "../hooks"


export const MultipleCustomHooks = () => {

  const {data, hasError, isLoading, error} = useFetch ('https://pokeapi.co/api/v2/pokemon/12');



  return (
   <>
   
   <h1>Pokemon Information</h1>
  
   
     <hr/>
    {isLoading && <p>Cargando</p>}
<h3>{data?.name}</h3>
    
</>
  )
}
