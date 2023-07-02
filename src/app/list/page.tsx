'use client'

import PokeCard from "@/components/PokeCard"
import { useEffect, useState } from "react";
import { PokemonProps } from "../types/PokemonProps";
import LoadingCard from "@/components/LoadingCard";
import { getAllPokemons } from "@/services/PokemonList";
import SearchBar from "@/components/SearchBar";

/**
 * Essa página retorna a lista de pokemons da poke-api
 * @returns 
 */
export default function PokeList() {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [pokeSearch, setPokeSearch] = useState<string>("");

  function filterPokeSearch() {
    Array.from(pokemons).sort();
  }

  // console.log("pokemons", pokemons)
  useEffect(() => {
    getAllPokemons(setPokemons)
    filterPokeSearch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    filterPokeSearch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokeSearch])

  return (
    <div className="flex flex-col items-center justify-center ">
      <SearchBar pokeSearch={pokeSearch} setPokeSearch={setPokeSearch} />
      <div className="flex flex-wrap gap-2 mt-2 mb-2 justify-center">

        {(pokemons.length) ?
          pokemons.filter(filtered => {
            return pokeSearch?.toLowerCase() === ''
              ? filtered
              : filtered.name.toLowerCase().includes(pokeSearch.toLowerCase())
          }).map((pokemon, index) => (
            <div className="hover:-translate-y-1 hover:bg-zinc-100" key={index}>
              <PokeCard
                pokeName={pokemon.name}
                pokeImage={pokemon.sprites.front_shiny}
                pokeNumber={pokemon.id}
                pokeType={pokemon.types}
              />
            </div>
          )) : <div className="flex flex-wrap gap-2 mt-2 mb-2 justify-center">
            {Array.from({ length: 10 }, (_, index) => (
              <LoadingCard key={index} />
            ))}
          </div>
        }
      </div >
    </div>
  )
}