export interface MediaData {
  name: string;
  description: string;
  id: string;
  country: string;
  imageURL: string;
  type: string;
  year: string;
  genre: string[];
}

export interface Movie {
  name: string;
  description: string;
  id: string;
  country: string;
  imageURL: string;
  type: string;
  year: string;
}

export interface Series {
  name: string;
  description: string;
  id: string;
  country: string;
  imageURL: string;
  type: string;
  year: string;
  run: string;
  seasons: string;
}

export interface CountryData {
  name: { common: string };
  code: string;
}

export const isMediaData = (data: any): data is MediaData => {
  return (
    typeof data.name === "string" &&
    typeof data.imageURL === "string" &&
    typeof data.description === "string" &&
    typeof data.country === "string" &&
    typeof data.year === "string" &&
    (data.type === "movie" || data.type === "series")
  );
};
