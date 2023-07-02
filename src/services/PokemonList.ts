import { SetStateAction } from "react";
import { api } from "./axios-config";
import { PokemonProps } from "@/app/types/PokemonProps";

const getAllPokemons = async (setPokemons: { (value: SetStateAction<PokemonProps[]>): void; (arg0: (prevData: any) => any[]): void; }) => {
  let endPoints = [];
  for (let i = 1; endPoints.length < 50; i++) {
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
    console.error(error);

  }

}

export { getAllPokemons, }