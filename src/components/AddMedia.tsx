import { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { CountryData, MediaData } from "../definitions";
import {
  generateYearRange,
  genres,
  isMediaData,
  sortCountries,
} from "../utils";
import { useNavigate } from "react-router-dom";

type Props = {
  addMediaSubmit: (data: MediaData) => void;
};

const AddMedia = ({ addMediaSubmit }: Props) => {
  const [imageData, setImageData] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [error, setError] = useState("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchCountries();
  }, []);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const genre = event.target.value;
    setSelectedGenres((prevSelected) =>
      prevSelected.includes(genre)
        ? prevSelected.filter((item) => item !== genre)
        : [...prevSelected, genre]
    );
  };

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

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedGenres.length === 0) {
      setError("Please select at least one genre.");
      return;
    }
    const formData = new FormData(event.currentTarget);
    formData.append("genre", JSON.stringify(selectedGenres));

    const payload = Object.fromEntries(formData) as {
      [key: string]: FormDataEntryValue;
    };

    payload.imageURL = imageData;

    console.log("added payload", payload);

    if (isMediaData(payload)) {
      addMediaSubmit(payload);
      if (payload.type === "movie") {
        return navigate(`/movies`);
      }
      navigate(`/${payload.type}`);
    } else {
      console.error("Invalid payload", payload);
    }
  };

  const genreInputOptions = genres.map((genre: string) => (
    <label htmlFor={genre} key={genre} className="flex items-center  w-fit">
      <input
        type="checkbox"
        value={genre}
        checked={selectedGenres.includes(genre)}
        onChange={handleCheckboxChange}
        name={genre}
        id={genre}
      />
      <p className="w-[200px]"> {genre}</p>
    </label>
  ));

  const orderedCountryList = sortCountries(countries);

  const countriesOptions = orderedCountryList.map((country: CountryData) => {
    return (
      <option key={country.name.common} value={country.name.common}>
        {country.name.common}
      </option>
    );
  });

  const yearOptions = generateYearRange().map((year: number) => {
    return (
      <option key={year} value={year}>
        {year}
      </option>
    );
  });

  return (
    <section className=" h-fit min-h-screen md:h-[120vh] flex  my-4 mx-auto w-full sm:p-5 sm:w-full max-w-[1000px]">
      <section className=" w-full my-10  justify-center gap-4 flex flex-col  sm:flex-row sm:h-[50%]  sm:w-full sm:mx-auto ">
        <section className=" min-h-[480px] max-h-[500px] w-full max-w-[380px] mx-auto sm:mx-0">
          {imageData ? (
            <img
              src={imageData}
              alt="Uploaded"
              className="object-cover h-full w-full"
            />
          ) : (
            <section className="border-2 h-full flex flex-col items-center justify-center bg-[#D9D9D9]">
              <h1 className="text-4xl font-bold grid items-center col-[2/8] row-[2/3]">
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
        <form onSubmit={submitForm} className="px-4 py-2 grid gap-4 w-[50%]">
          <label htmlFor="name">
            <p>Movie/Series name</p>
            <input
              id="name"
              type="text"
              placeholder="Movies/ Series name"
              name="name"
              required
            />
          </label>

          {/* Add Image */}
          <input
            className="hidden"
            type="file"
            name="imageURL"
            ref={fileInputRef}
            onChange={handleFileChange}
            required
          />

          <label htmlFor="description">
            <p>Description</p>
            <textarea
              className="h-[120px]"
              placeholder="Movies/ Series Description"
              name="description"
              id="description"
              required
            />
          </label>

          <label htmlFor="">
            <p>Gener/s</p>
            <div className="">
              <label htmlFor="genre-selector">
                <div id="genre-selector" className="flex flex-wrap">
                  {genreInputOptions}
                </div>
              </label>
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </label>

          <label htmlFor="country">
            <p>Country</p>
            <select name="country" id="country" required>
              {countriesOptions}
            </select>
          </label>

          <label htmlFor="year">
            <p>Year</p>
            <select name="year" required id="year">
              {yearOptions}
            </select>
          </label>

          <section className="grid grid-cols-2">
            <label
              htmlFor="movie"
              className="grid grid-cols-[0.2fr_1fr] items-center"
            >
              <input
                id="movie"
                name="type"
                value="movie"
                type="radio"
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
                value="series"
                type="radio"
                required
              />
              <p className="mb-0">Series</p>
            </label>
          </section>
          <button className="bg-button py-2 text-white rounded-2xl">
            Save
          </button>
        </form>
      </section>
    </section>
  );
};
export default AddMedia;
