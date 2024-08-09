import Header from '../components/Header'
import ShowAllMedia from '../components/ShowMedia/ShowAllMedia'
import ContentLayout from '../layouts/ContentLayout'

const MoviesPage = () => {
  return (
    <>
      <Header headerStyles="bg-red-400" heading={'latest movies'} />
      <ContentLayout gridStyles={'grid-cols-1'}>
        <ShowAllMedia type="movies" />
      </ContentLayout>
    </>
  )
}

export default MoviesPage
