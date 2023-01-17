import axios from "axios";


const URL = "https://pokeapi.co/api/v2/pokeman?limit=151"


export const getAllPokemonList = async() => {
    const{data} = await axios.get(URL);
    return data
}