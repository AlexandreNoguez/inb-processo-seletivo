"use client"

interface SearchBarProps {
  pokeSearch: string;
  setPokeSearch: (value: string) => void
}
export default function SearchBar({ pokeSearch, setPokeSearch }: SearchBarProps) {

  return (
    <div className="mt-2 border-slate-900 w-1/2 flex flex-col text-center justify-center items-center rounded-lg bg-zinc-200 border-2">
      <div className="gap-2 p-2">
        <h1 className="text-lg p-2">Pesquisar</h1>

        <label htmlFor="searchBar" className="text-sm mx-4">Pokémon</label>
        <input
          className="w-1/2 px-2"
          type="text"
          id="searchBar"
          value={pokeSearch}
          onChange={e => setPokeSearch(e.target.value)}
        />
        {/* <label for="username">Click me to focus on the input field</label>
        <input type="text" id="username" /> */}
      </div>
    </div>
  )
}