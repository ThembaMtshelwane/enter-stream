import { CountryData } from "./definitions";

export const sortCountries = (list: CountryData[]) => {
  list.sort((a: CountryData, b: CountryData) => {
    const nameA = a.name.common.toUpperCase();
    const nameB = b.name.common.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return list;
};

export const generateYearRange = () => {
  const earliest: number = 1888;
  const latest: number = new Date().getFullYear();
  const yearRange: number[] = [];

  for (let year = latest; year >= earliest; year--) {
    yearRange.push(year);
  }
  return yearRange;
};

export const notType = (type: string) => {
  if (type === "movie") return "series";
  return "movie";
};
