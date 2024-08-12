import { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'

interface CountryData {
  name: { common: string }
  code: string
}
type Props = {}
const AddMedia = (props: Props) => {
  const [imageData, setImageData] = useState(null)
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchSingleMedia = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/all`)
        const data = await res.json()
        setCountries(data)
        console.log(data)
      } catch (error) {
        console.log('Error fetching data', error)
      } finally {
        // setIsLoading(false)
      }
    }
    fetchSingleMedia()
  }, [])

  countries.sort((a: CountryData, b: CountryData) => {
    const nameA = a.name.common.toUpperCase() // Convert to uppercase to ensure case-insensitive sorting
    const nameB = b.name.common.toUpperCase()

    if (nameA < nameB) {
      return -1 // a comes before b
    }
    if (nameA > nameB) {
      return 1 // a comes after b
    }
    return 0 // names are equal
  })
  const countriesOptions = countries.map((country: CountryData) => {
    return (
      <option key={country.name.common} value={country.name.common}>
        {country.name.common}
      </option>
    )
  }, [])
  return (
    <section className="border-2 border-blue-600 mx-auto w-[90%] h-fit grid grid-cols-1 grid-rows-[1fr_1fr] my-10  sm:grid-cols-2 sm:grid-rows-1 sm:w-[90%] lg:w-[70%] ">
      <section className="border-[5px] border-green-800 h-[90%]">
        {imageData ? (
          <img src="" alt="" />
        ) : (
          <section className="border-2 h-full flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold grid items-center col-[2/8] row-[2/3]">
              Upload Image
            </h1>
            <button className="general-button m-5">
              <FaPlus />
            </button>
          </section>
        )}
      </section>
      <form action="" className="px-4 py-2 border-2 border-black grid gap-4">
        <label htmlFor="">
          <p>Movie/Series name</p>
          <input type="text" placeholder="Movies/ Series name" />
        </label>
        <input className="hidden" type="file" />
        <label htmlFor="">
          <p>Description</p>
          <textarea
            className="h-[120px]"
            placeholder="Movies/ Series Description"
          />
        </label>
        <label htmlFor="">
          <p>Country</p>
          <select name="" id="">
            {countriesOptions}
          </select>
        </label>
        <label htmlFor="">
          <p>Year</p>
          <input type="date" />
        </label>
        <section className="border-2 border-black grid grid-cols-2">
          <label htmlFor="" className="grid grid-cols-[0.2fr_1fr] items-center">
            <input name="type" type="radio" />
            <p className="mb-0">Movie</p>
          </label>
          <label
            htmlFor=""
            className="items-center justify-items-start grid grid-cols-[0.2fr_1fr]"
          >
            <input name="type" type="radio" />
            <p className="mb-0">Series</p>
          </label>
        </section>
        <button className="bg-button py-2 text-white rounded-2xl">Save</button>
      </form>
    </section>
  )
}
export default AddMedia
