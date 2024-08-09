import Header from '../components/Header'
import ShowMedia from '../components/ShowMedia/ShowMedia'
import ContentLayout from '../layouts/ContentLayout'

type Props = {
  headerStyles: string
  heading: string
}

const HomePage = ({ headerStyles, heading }: Props) => {
  return (
    <>
      <Header headerStyles={headerStyles} heading={heading} />
      {/* Home Page layout */}
      <ContentLayout styles="grid-cols-1 grid-rows-2 gap-4">
        <ShowMedia link="/movies" name="movies" />
        <ShowMedia link="/series" name="series" />
      </ContentLayout>
    </>
  )
}

export default HomePage
