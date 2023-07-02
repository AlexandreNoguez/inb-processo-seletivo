import Image from "next/image"
import Link from "next/link"
import pokeLogo from "@/assets/logo.png"
export default function PokeHeader() {
  return (
    <header className="w-full h-20 bg-slate-700 flex justify-evenly items-center" >
      <Image width={100} src={pokeLogo} alt="logo pokemon, uma pokebola" />
      <nav>
        <ul className="flex text-zinc-300 gap-3">
          <li className="hover:text-zinc-100">
            <Link href={"/"}>Página Inicial</Link>
          </li>
          <li className="hover:text-zinc-100">
            <Link href={"/list"}>Pokédex</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}