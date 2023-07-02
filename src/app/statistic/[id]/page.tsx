"use client"

import PokeCard from "@/components/PokeCard";
import { useEffect, useState } from "react";
import { api } from "@/services/axios-config";
import { usePathname } from "next/navigation";
import pokeAsh from "@/assets/poke-ash.png"

export default function PokeById() {
  const pathname = usePathname()
  const pokePath = pathname.split("/")[2]
  // console.log("=====", pokePath,);
  const [pokeImage, setPokeImage] = useState<string>();
  const [pokeName, setPokeName] = useState<string>();
  const [pokeNumber, setPokeNumber] = useState<number>();
  const [pokeType, setPokeType] = useState<[]>([]);
  const [key, setKey] = useState<string>();


  // console.log("pokeById", pokeById);
  async function getPokemonById() {
    try {
      // Using axios with your API
      const response = await api.get(`/pokemon/${pokePath}`);
      setPokeImage(response.data.sprites.front_shiny);
      setPokeName(response.data.name);
      setPokeNumber(response.data.id);
      setPokeType(response.data);
      setKey(response.data.id);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPokemonById()
  }, [pokePath]);

  return (

    <div className="flex justify-center ">
      {(pokeImage && pokeName && pokeNumber && pokeType) ?
        <PokeCard
          pokeImage={pokeImage}
          pokeName={pokeName}
          pokeNumber={pokeNumber}
          pokeType={pokeType}
          key={key}
        />
        :
        <div className="animate-pulse">

          <PokeCard
            pokeImage={pokeAsh}
            pokeName={"Ash"}
            pokeNumber={0}
            pokeType={pokeType}
            key={key}
          />
        </div>}
    </div >

  )
}