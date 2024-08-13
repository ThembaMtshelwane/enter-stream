import { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { CountryData, isMediaData, MediaData } from "../definitions";
import { generateYearRange, sortCountries } from "../utilis";
import { useNavigate } from "react-router-dom";

type Props = {
  addMediaSubmit: (data: MediaData) => void;
};

const AddMedia = ({ addMediaSubmit }: Props) => {
  const [imageData, setImageData] = useState("");
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
      } finally {
        // setIsLoading(false)
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

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData) as {
      [key: string]: FormDataEntryValue;
    };
    payload.imageURL = imageData;

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
      <option key={year} value={year}>
        {year}
      </option>
    );
  });

  return (
    <section className="border-2 border-blue-600 mx-auto w-[90%] h-fit grid grid-cols-1 grid-rows-[1fr_1fr] my-10  sm:grid-cols-2 sm:grid-rows-1 sm:w-[90%] lg:w-[70%] ">
      <section className="border-[5px] border-green-800 h-[90%]">
        {imageData ? (
          <img
            src={imageData}
            alt="Uploaded"
            className="object-cover h-full w-full"
          />
        ) : (
          <section className="border-2 h-full flex flex-col items-center justify-center">
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
      <form
        onSubmit={submitForm}
        className="px-4 py-2 border-2 border-black grid gap-4"
      >
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

        <section className="border-2 border-black grid grid-cols-2">
          <label
            htmlFor="movie"
            className="grid grid-cols-[0.2fr_1fr] items-center"
          >
            <input id="movie" name="type" value="movie" type="radio" required />
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
        <button className="bg-button py-2 text-white rounded-2xl">Save</button>
      </form>
    </section>
  );
};
export default AddMedia;
