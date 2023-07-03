import background from "@/assets/home-background.png"

export default function Home() {

  return (
    <div className="flex gap-8" style={{
      backgroundImage: `url('${background.src}')`, backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      height: "80vh",
      width: "100%"
    }}>
      <div className="w-1/2 h-44 p-4 border-2 border-black text-center mt-10 bg-slate-200 rounded-lg overflow-y-scroll">

        <h1 className="text-center">Olá, bem-vindos a minha Pokédex!</h1>
        <p className="text-justify mt-4">
          &emsp;
          Aqui você vai encontrar muitos pokémons e suas principais características, podendo ainda ver o nome de suas habilidades e também seus parâmetros de batalha.
        </p>
      </div>
      <div className="w-1/2 h-44 p-4 border-2 border-black text-center mt-10 bg-slate-200 rounded-lg overflow-y-scroll">

        <h1 className="text-center">INB - Instituto Nicolas Bueno!</h1>
        <p className="text-justify mt-4">
          &emsp;
          Este foi um desafio proposto pela INB para uma vaga de desenvolvedor de software junior.
        </p>
      </div>
    </div>

  )
}
