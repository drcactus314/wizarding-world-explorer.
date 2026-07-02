import { getCharacters } from "../api/api";

const filterHouse = await getCharacters();

export const filterHouses = async (houseName) => {
  filterHouse.filter((item) => {
    if (houseName === item.house){
        console.log(item.house);
    } 
  });
  return true;
};
