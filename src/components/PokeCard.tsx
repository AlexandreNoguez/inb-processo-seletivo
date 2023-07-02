import { ICardProps } from "@/app/types/PokemonProps";
import Image from "next/image";
import Link from "next/link";

/**
 * 
 * @param pokeName é o nome do pokemon
 * @param pokeImage é imagem do pokemon
 * @param pokeNumber é o número do pokemon
 * @param pokeType é o tipo do pokemon
 * @param pokeType é o tipo do pokemon
 * @returns 
 */
export default function PokeCard({
  pokeName,
  pokeImage,
  pokeNumber,
  pokeType
}: ICardProps) {


  // console.log(pokeType.types);

  function typeChecker() {
    if (pokeType[1]) {
      return `${pokeType[0].type.name} | ${pokeType[1]?.type.name}`
    }
    return pokeType[0]?.type.name
  }

  return (
    <div className="border-slate-900 border-2 rounded-lg bg-zinc-200 min-h-[228px] w-44 p-4 flex flex-col text-center items-center justify-center">
      <Link href={`/statistic/${pokeName}`}>

        <div className="flex flex-col items-center justify-center">
          <h2>{pokeName}</h2>
          <Image
            width={100}
            height={100}
            src={pokeImage}
            alt={`imagem do pokemon ${pokeName}`} />
        </div>

        <div>
          <h2>Nº {pokeNumber}</h2>
        </div>
        <div>
          {pokeType ?
            <h4>Tipo: {typeChecker()}</h4>
            : <h3>Tipo não encontrado</h3>}
        </div>
      </Link>

    </div >
  )
}