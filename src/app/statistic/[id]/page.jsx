"use client"

import PokeCard from "@/components/PokeCard";
import { useEffect, useState } from "react";
import { api } from "@/services/axios-config";
import { usePathname } from "next/navigation";
import LoadingCard from "@/components/LoadingCard";
import { PokemonType } from "@/app/types/PokemonProps";
import PokeCharts from "@/components/PokeCharts";

export default function PokeById() {
  const pathname = usePathname()
  const pokePath = pathname.split("/")[2]
  const [key, setKey] = useState();
  const [pokeImage, setPokeImage] = useState();
  const [pokeName, setPokeName] = useState();
  const [pokeNumber, setPokeNumber] = useState();
  const [pokeType, setPokeType] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [stats, setStats] = useState([]);

  // console.log("stats", stats);
  // console.log("pokeType", pokeType);
  async function getPokemonById() {
    try {
      const response = await api.get(`/pokemon/${pokePath}`);
      setPokeImage(response.data.sprites.front_shiny);
      setPokeName(response.data.name);
      setPokeNumber(response.data.id);
      setPokeType(response.data.types);
      setKey(response.data.id);


      let statsArray = [];
      await response.data.stats.forEach((item) => {

        const statObj = {
          data: [
            { x: item.base_stat },
            { y: item.stat.name }
          ],
        }
        statsArray.push(statObj);
        setStats(prevData => [...prevData, statObj])
      })

      await response.data.abilities.forEach((getAbility) => {
        setAbilities(prevData => [...prevData, getAbility.ability.name])
      })

    } catch (error) {
      console.error(error);
    }
  }

  // async function getPokemonById() {
  //   try {
  //     const response = await api.get(`/pokemon/${pokePath}`);
  //     setPokeImage(response.data.sprites.front_shiny);
  //     setPokeName(response.data.name);
  //     setPokeNumber(response.data.id);
  //     setPokeType(response.data.types);
  //     setKey(response.data.id);


  //     let statsArray: [] = [];
  //     await response.data.stats.forEach((item: { base_stat: number; stat: { name: string; }; }) => {

  //       const statObj = {
  //         data: [
  //           { x: item.base_stat },
  //           { y: item.stat.name }
  //         ],
  //       }
  //       statsArray.push(statObj);
  //       setStats(prevData => [...prevData, statObj])
  //     })

  //     await response.data.abilities.forEach((getAbility: { ability: { name: string } }) => {
  //       setAbilities(prevData => [...prevData, getAbility.ability.name])
  //     })

  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  useEffect(() => {
    getPokemonById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokePath]);

  return (

    <div className="flex justify-center flex-wrap gap-2 mt-2 mb-2">
      {(pokeImage && pokeName && pokeNumber && pokeType) ?
        <div className="flex flex-col gap-2 justify-center items-center">
          <PokeCard
            pokeImage={pokeImage}
            pokeName={pokeName}
            pokeNumber={pokeNumber}
            pokeType={pokeType}
            key={key}
          />
          {/* INICIOS DAS HABILIDADES E STATS */}
          <div className="flex gap-2 sm:flex-wrap">
            {/* HABILIDADES */}
            <div className="border-slate-900 border-2 rounded-lg bg-zinc-200 h-[270px] w-80 text-center items-center justify-center">
              <div className="mt-4">
                <h1>Habilidades</h1>
              </div>
              <div className="flex flex-col justify-center items-center text-left mt-8">
                {abilities.map((ability, index) => (
                  <span key={index}>{ability}</span>
                ))}
              </div>
            </div >
            {/* STATS */}
            <div className="border-slate-900 border-2 rounded-lg bg-zinc-200 h-[270px] w-80 flex flex-col text-center items-center justify-center">
              <PokeCharts stats={stats} />
            </div >
          </div>
        </div>
        :
        <div className="animate-pulse">
          <LoadingCard />
        </div>}
    </div >

  )
}