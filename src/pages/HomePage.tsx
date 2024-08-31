import Header from '../components/Header'
import ShowSomeMedia from '../components/ShowMedia/ShowSomeMedia'
import ContentLayout from '../layouts/ContentLayout'

const HomePage = () => {
  return (
    <>
      <Header
        headerImage="https://i.pinimg.com/originals/a9/18/c4/a918c48c36d57e6445c25600e5edfdfd.jpg"
        heading="welcome"
      />
      {/* Home Page layout  2by1 */}
      <ContentLayout gridStyles="grid-cols-1 grid-rows-2 gap-4">
        <ShowSomeMedia link="/movies" name="movies" type="movies" />
        <ShowSomeMedia link="/series" name="series" type="series" />
      </ContentLayout>
    </>
  )
}

export default HomePage
