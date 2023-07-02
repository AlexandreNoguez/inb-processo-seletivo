export interface PokemonProps {
  id: number;
  name: string;
  types: [
    {
      type: {
        name: string
      }
    }
  ]
  sprites: {
    front_shiny: string;
  }
}