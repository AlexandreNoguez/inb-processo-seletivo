
export interface ICardProps {
  pokeName: string;
  pokeImage: string;
  pokeNumber: number;
  pokeType: PokemonType[]
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