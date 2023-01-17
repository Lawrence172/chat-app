import { useEffect, useState } from "react";
import { getAllPokemonList } from "./api/pokemon";

function App() {
  const [pokemonData,setPokemonData] = useState([]);


  useEffect(() => {
    async function fetchData(){
      const data = await getAllPokemonList();
      setPokemonData(data?.result);
    }
    fetchData();
  }, [])
  return (
    <div className="App">
      <div>
        {pokemonData?.map((poke,i) =>{
          return(
            <div>
              <h1>Hello world</h1>
            </div>
          )
        })}
      </div>
          </div>
  );
}

export default App;
