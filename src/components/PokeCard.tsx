import { ICardProps } from "@/app/types/PokemonProps";
import Image from "next/image";
import Link from "next/link";

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
    <div className=" rounded-lg bg-zinc-200 min-h-[228px] w-44 p-4 flex flex-col text-center items-center justify-center">
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
            <h2>Tipo: {typeChecker()}</h2>
            : <h3>Tipo não encontrado</h3>}
        </div>
      </Link>

    </div >
  )
}