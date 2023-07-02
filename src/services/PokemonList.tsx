// import { api } from "./axios-config";
// import { PokemonProps } from "@/app/types/PokemonProps";

// const getAllPokemons = async () => {
//   let endPoints = [];

//   for (let i = 1; endPoints.length < 50; i++) {
//     endPoints.push(`/pokemon/${i}`)
//   }

//   try {
//     await api.all(endPoints.map(endPoint => {
//       api.get(endPoint).then(response => {
//         console.log(response.data.name);
//         const data: [] = response.data
//         // setPokemons(data);
//       })
//         .catch(err => {
//           console.error(err);
//         })
//     }))

//   } catch (error) {

//   }

// }

// export { getAllPokemons, }