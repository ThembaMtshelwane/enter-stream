import Header from '../components/Header'
import ContentLayout from '../layouts/ContentLayout'

const MoviesPage = () => {
  return (
    <>
      <Header headerStyles="bg-red-400" heading={'latest movies'} />
      <ContentLayout styles="">
        <p>Movies</p>
      </ContentLayout>
    </>
  )
}

export default MoviesPage
