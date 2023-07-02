'use client'

import PokeCard from "@/components/PokeCard"
import { useEffect, useState } from "react";
import { PokemonProps } from "../types/PokemonProps";
import { api } from "@/services/axios-config";

export default function PokeList() {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  const getAllPokemons = async () => {
    let endPoints = [];

    for (let i = 1; endPoints.length < 30; i++) {
      endPoints.push(`/pokemon/${i}`)
    }

    try {
      await Promise.all(endPoints.map(endPoint => {
        api.get(endPoint).then(response => {
          // console.log(response.data.name);
          const data = response.data
          setPokemons(prevData => [...prevData, data]);
        })
          .catch(err => {
            console.error(err);
          })
      }))

    } catch (error) {

    }

  }
  console.log("pokemons", pokemons)
  useEffect(() => {
    getAllPokemons()
  }, [])
  return (
    <div className="flex flex-wrap gap-2 mt-2 mb-2 justify-center">
      {(pokemons) ? pokemons?.map((pokemon) => (
        <div key={pokemon.id}>
          <PokeCard
            pokeName={pokemon.name}
            pokeImage={pokemon.sprites.front_shiny}
            pokeNumber={pokemon.id}
            pokeType={pokemon.types}
          />
        </div>
      )) : <h2>Não foram encontrados pokémons</h2>
      }
    </div >
  )
}