type Props = {}
const AddMedia = (props: Props) => {
  return (
    <section className="border-2 border-blue-600 mx-auto w-[90%] grid grid-cols-1 grid-rows-2 my-10 gap-7 sm:grid-cols-2 sm:grid-rows-1 md:w-[70%] ">
      <img src="" alt="" />
      <form action="">
        <label htmlFor="">
          <p>Movie/Series name</p>
          <input type="text" placeholder="Movies/ Series name" />
        </label>
        <label htmlFor="">
          <p>Description</p>
          <textarea placeholder="Movies/ Series Description" />
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
        <section>
          <label htmlFor="">
            <p>Movie</p>
            <input type="radio" />
          </label>
          <label htmlFor="">
            <p>Series</p>
            <input type="radio" />
          </label>
        </section>
      </form>
    </section>
  )
}
export default AddMedia
