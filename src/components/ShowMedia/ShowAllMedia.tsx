import Button from '../Buttons/Button'
import MediaGrid from './MediaGrid'

type Props = { type: string }

const ShowAllMedia = ({ type }: Props) => {
  console.log(type)

  return (
    <section className="border-2 border-blue-600  my-4 h-screen grid grid-cols-1 grid-rows-[70px_10fr] mx-auto sm:grid-rows-[100px_10fr] w-full sm:w-[90%] md:w-[80%] lg:w-[80%]">
      <Button
        name="add"
        link="/add"
        styles={'capitalize my-auto ml-auto bg-button'}
      />
      <MediaGrid type={type} />
    </section>
  )
}
export default ShowAllMedia