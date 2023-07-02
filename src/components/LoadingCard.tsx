import Image from "next/image"
import pokeAsh from "@/assets/poke-ash.png"

export default function LoadingCard() {
  return (
    <div className=" rounded-lg bg-zinc-200 min-h-[228px] w-44 p-4 flex flex-col text-center items-center justify-center">

      <div className="flex flex-col items-center justify-center animate-pulse">
        <h2>Carregando...</h2>
        <Image
          width={100}
          height={100}
          src={pokeAsh}
          alt={`imagem do pokemon Ash`} />
      </div>
    </div >
  )
}