import React, { useEffect, useRef, useState } from "react";
import { CountryData, MediaData } from "../definitions";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  generateYearRange,
  genres,
  isMediaData,
  sortCountries,
} from "../utils";

type Props = {
  oldData: MediaData;
  editMediaSubmit: (data: MediaData) => void;
};

const EditMedia = ({ oldData, editMediaSubmit }: Props) => {
  const [imageData, setImageData] = useState(oldData.imageURL);
  const [selectedCountry, setSelectedCountry] = useState(oldData.country);
  const [selectedType, setSelectedType] = useState(oldData.type);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [countries, setCountries] = useState([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchCountries();
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageData(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const genre = event.target.value;
    setSelectedGenres((prevSelected) =>
      prevSelected.includes(genre)
        ? prevSelected.filter((item) => item !== genre)
        : [...prevSelected, genre]
    );
  };

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("genre", JSON.stringify(selectedGenres));

    const payload = Object.fromEntries(formData) as {
      [key: string]: FormDataEntryValue;
    };
    payload.id = oldData.id;
    payload.imageURL = imageData;
    payload.country = selectedCountry;

    console.log("new", payload);

    if (isMediaData(payload)) {
      await editMediaSubmit(payload);
      if (payload.type === "movie") {
        return navigate(`/movies/${oldData.id}`);
      }
      navigate(`/${payload.type}/${oldData.id}`);
    } else {
      console.error("Invalid payload", payload);
    }
  };

  const oderedCountryList = sortCountries(countries);

  const countriesOptions = oderedCountryList.map((country: CountryData) => {
    return (
      <option key={country.name.common} value={country.name.common}>
        {country.name.common}
      </option>
    );
  });

  const yearOptions = generateYearRange().map((year: number) => {
    return (
      <option key={year} defaultValue={year}>
        {year}
      </option>
    );
  });

  return (
    <section className="h-fit min-h-screen md:h-[120vh] flex  my-4 mx-auto w-full sm:p-5 sm:w-[100%] md:w-[95%] lg:w-[80%]">
      <section className=" h-fit w-[90%] sm:w-full mx-auto justify-center gap-4 flex flex-col  sm:flex-row my-10">
        <section className=" h-[500px]">
          {imageData ? (
            <img
              src={imageData}
              alt="Uploaded"
              className="w-[380px] h-full mx-auto"
            />
          ) : (
            <section className=" h-full flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold grid items-center">
                Upload Image
              </h1>
              <button
                className="general-button m-5"
                onClick={() => fileInputRef.current?.click()}
              >
                <FaPlus />
              </button>
            </section>
          )}
        </section>

        <form
          onSubmit={submitForm}
          className="h-fit sm:w-[50%] flex flex-col  gap-4"
        >
          <label htmlFor="name">
            <p>Movie/Series name</p>
            <input
              id="name"
              type="text"
              placeholder="Movies/ Series name"
              name="name"
              required
              defaultValue={oldData.name}
            />
          </label>

          {/* Add Image */}
          <input
            //   className="hidden"
            type="file"
            name="imageURL"
            ref={fileInputRef}
            onChange={handleFileChange}
            // required
            // defaultValue={oldData.imageURL}
          />

          <label htmlFor="description">
            <p>Description</p>
            <textarea
              className="h-[120px]"
              placeholder="Movies/ Series Description"
              name="description"
              id="description"
              required
              defaultValue={oldData.description}
            />
          </label>

          <label htmlFor="">
            <p>Gener/s:</p>
            <div>
              <label htmlFor="genre-selector">
                <div id="genre-selector" className="flex flex-wrap">
                  {genres.map((genre) => (
                    <label key={genre} className="flex items-center w-fit">
                      <input
                        type="checkbox"
                        value={genre}
                        checked={selectedGenres.includes(genre)}
                        onChange={handleCheckboxChange}
                      />
                      <p className="w-[200px]"> {genre}</p>
                    </label>
                  ))}
                </div>
              </label>
            </div>
          </label>

          <label htmlFor="country">
            <p>Country</p>
            <select
              name="country"
              id="country"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              required
            >
              {countriesOptions}
            </select>
          </label>

          <label htmlFor="year">
            <p>Year</p>
            <select name="year" required id="year" defaultValue={oldData.year}>
              {yearOptions}
            </select>
          </label>

          <section className=" grid grid-cols-2">
            <label
              htmlFor="movie"
              className="grid grid-cols-[0.2fr_1fr] items-center"
            >
              <input
                id="movie"
                name="type"
                type="radio"
                value="movie"
                checked={selectedType === "movie"}
                onChange={(e) => setSelectedType(e.target.value)}
                required
              />
              <p className="mb-0">Movie</p>
            </label>
            <label
              htmlFor="series"
              className="items-center justify-items-start grid grid-cols-[0.2fr_1fr]"
            >
              <input
                id="series"
                name="type"
                type="radio"
                value="series"
                checked={selectedType === "series"}
                onChange={(e) => setSelectedType(e.target.value)}
                required
              />
              <p className="mb-0">Series</p>
            </label>
          </section>
          <button
            type="submit"
            className="bg-button py-2 text-white rounded-2xl"
          >
            Save
          </button>
        </form>
      </section>
    </section>
  );
};
export default EditMedia;
