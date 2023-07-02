// export interface PokemonProps {
//   id: number;
//   name: string;
//   types: [
//     {
//       type: {
//         name: string
//       }
//     }
//   ]
//   sprites: {
//     front_shiny: string;
//   }
// }

export interface ICardProps {
  pokeName: string;
  pokeImage: string | File;
  pokeNumber: number;
  pokeType: [{
    type: {
      name: string
    }
  }]
}

export interface PokemonProps {
  id: number;
  name: string;
  types: PokemonType[];
  sprites: {
    front_shiny: string;
  };
}

export interface PokemonType {
  type: {
    name: string;
  };
}