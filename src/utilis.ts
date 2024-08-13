import { CountryData } from "./definitions";

export const sortCountries = (list: CountryData[]) => {
  list.sort((a: CountryData, b: CountryData) => {
    const nameA = a.name.common.toUpperCase(); // Convert to uppercase to ensure case-insensitive sorting
    const nameB = b.name.common.toUpperCase();

    if (nameA < nameB) {
      return -1; // a comes before b
    }
    if (nameA > nameB) {
      return 1; // a comes after b
    }
    return 0; // names are equal
  });
  return list;
};
