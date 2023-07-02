import Image from "next/image";
import Link from "next/link";

export interface ICardProps {
  pokeName: string;
  pokeImage: string;
  pokeNumber: number;
  pokeType: [{
    type: {
      name: string
    }
  }]
}

export default function PokeCard({
  pokeName,
  pokeImage,
  pokeNumber,
  pokeType
}: ICardProps) {
  return (
    <div className=" rounded-lg bg-zinc-200 w-36 p-4 flex flex-col text-center items-center justify-center">
      <Link href={`/statistic/${pokeName}`}>

        <div>
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
            <h2>{pokeType[0]?.type.name}</h2>
            : <h3>Tipo não encontrado</h3>}
        </div>
      </Link>

    </div >
  )
}