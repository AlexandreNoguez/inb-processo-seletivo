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
  const [key, setKey] = useState<string>();
  const [pokeImage, setPokeImage] = useState<string>();
  const [pokeName, setPokeName] = useState<string>();
  const [pokeNumber, setPokeNumber] = useState<number>();
  const [pokeType, setPokeType] = useState<PokemonType[]>([]);
  const [abilities, setAbilities] = useState<Array<[]>>([]);
  const [stats, setStats] = useState<Array<[]>>([]);

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
      console.log("response", response.data.stats);

      let statsArray: [] = [];
      await response.data.stats.forEach((item: { base_stat: number; stat: { name: string; }; }) => {

        const statObj = {
          data: [
            { x: item.base_stat },
            { y: item.stat.name }
          ],
        }
        statsArray.push(statObj);
        setStats(prevData => [...prevData, statObj])
      })

      // let convertedData = statsArray.flatMap(item => item.data);

      await response.data.abilities.forEach((getAbility) => {
        setAbilities(prevData => [...prevData, getAbility.ability.name])
      })
      // return setAbilities(getAbilities)

    } catch (error) {
      console.error(error);
    }
  }

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
          <div className="flex justify-center items-center gap-2">
            {/* HABILIDADES */}
            <div className="border-slate-900 border-2 rounded-lg bg-zinc-200 min-h-[200px] w-full flex flex-col text-left items-center justify-center">

              <h1>Habilidades</h1>
              <div className="flex flex-col">
                <div className="flex flex-col text-left">

                  <span>{`${abilities[0] ?? ""}`}</span>
                  <span>{`${abilities[1] ?? ""}`}</span>
                  <span>{`${abilities[2] ?? ""}`}</span>
                </div>
                {/* <Image
                    width={100}
                    height={100}
                    src={pokeImage}
                    alt={`imagem do pokemon ${pokeName}`} /> */}
              </div>


              <div>
                {/* {pokeType ?
                  <h4>Tipo: {typeChecker()}</h4>
                  : <h3>Tipo não encontrado</h3>} */}
              </div>
              {/* </Link> */}

            </div >
            {/* STATS */}
            <div className="border-slate-900 border-2 rounded-lg bg-zinc-200 min-h-[200px] w-full flex flex-col text-center items-center justify-center">
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