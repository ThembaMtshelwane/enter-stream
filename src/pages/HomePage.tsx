import Header from '../components/Header'
import ShowSomeMedia from '../components/ShowMedia/ShowSomeMedia'
import ContentLayout from '../layouts/ContentLayout'

const HomePage = () => {
  return (
    <>
      <Header headerStyles="bg-hero-pattern" heading="welcome" />
      {/* Home Page layout  2by1 */}
      <ContentLayout gridStyles="grid-cols-1 grid-rows-2 gap-4">
        <ShowSomeMedia link="/movies" name="movies" />
        <ShowSomeMedia link="/series" name="series" />
      </ContentLayout>
    </>
  )
}

export default HomePage
