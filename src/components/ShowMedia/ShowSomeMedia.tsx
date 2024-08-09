import Button from '../Buttons/Button'
import MediaGrid from './MediaGrid'

type Props = {
  link: string
  name: string
}

const ShowSomeMedia = ({ link, name }: Props) => {
  return (
    <section className="border-2 border-yellow-600  my-4 h-screen grid grid-cols-1 grid-rows-[70px_10fr_70px] mx-auto sm:grid-rows-[100px_10fr_70px] w-full sm:w-[90%] md:w-[80%] lg:w-[80%]">
      <h1 className="text-center my-auto uppercase">latest {name}</h1>
      <MediaGrid type={name} />
      <Button
        name={'more'}
        link={link}
        styles={'capitalize my-auto ml-auto bg-button'}
      />
    </section>
  )
}

export default ShowSomeMedia