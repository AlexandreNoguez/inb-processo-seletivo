'use client'

import PokeCard from "@/components/PokeCard"
import { SetStateAction, useEffect, useState } from "react";
import { PokemonProps } from "../types/PokemonProps";
import LoadingCard from "@/components/LoadingCard";
import { getAllPokemons } from "@/services/PokemonList";

export default function PokeList() {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);


  // console.log("pokemons", pokemons)
  useEffect(() => {
    getAllPokemons(setPokemons)
  }, [])
  return (
    <div className="flex flex-wrap gap-2 mt-2 mb-2 justify-center">
      {(pokemons.length) ? pokemons?.map((pokemon) => (
        <div className="hover:-translate-y-1 hover:bg-zinc-100" key={pokemon.id}>
          <PokeCard
            pokeName={pokemon.name}
            pokeImage={pokemon.sprites.front_shiny}
            pokeNumber={pokemon.id}
            pokeType={pokemon.types}
          />
        </div>
      )) : <div className="flex gap-4 flex-wrap">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
      }
    </div >
  )
}