export interface MediaData {
  name: string;
  description: string;
  id: string;
  country: string;
  imageURL: string;
  type: string;
  year: string;
  genre: string;
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
