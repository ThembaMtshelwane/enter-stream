import { useState } from 'react'
import {} from 'react-icons'

type Props = {}
const AddMedia = (props: Props) => {
  const [imageData, setImageData] = useState(null)
  return (
    <section className="border-2 border-blue-600 mx-auto w-[90%] grid grid-cols-1 grid-rows-[1fr_1fr] my-10  sm:grid-cols-2 sm:grid-rows-1 md:w-[70%] ">
      <section className="border-[5px] border-green-800">
        {imageData ? (
          <img src="" alt="" />
        ) : (
          <section className="border-2 h-full grid grid-cols-8 grid-rows-[1.5fr_0.5fr_0.5fr_1.5fr] border-red-700">
            <h1 className="text-4xl font-bold grid items-center col-[2/8] row-[2/3]">
              Upload Image
            </h1>
            <button className="text-[50px] border-2 rounded-full col-[4/6] row-[3/4] text-white bg-button">
              +
            </button>
          </section>
        )}
      </section>
      <form action="" className="px-4 py-2 border-2 border-black grid gap-4">
        <label htmlFor="">
          <p>Movie/Series name</p>
          <input type="text" placeholder="Movies/ Series name" />
        </label>
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
            <option value="">South Africa</option>
            <option value="">United States of America</option>
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
