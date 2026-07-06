import { getCharacters } from "../api/api";

const filterHouse = await getCharacters();

export const getFilterHouses = async (houseName) => {
  const filteredArray = filterHouse.filter((item) => {
    return houseName === item.house;
  });
  return filteredArray;
};
