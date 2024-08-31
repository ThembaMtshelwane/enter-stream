import Header from '../components/Header'
import ShowAllMedia from '../components/ShowMedia/ShowAllMedia'
import ContentLayout from '../layouts/ContentLayout'

const SeriesPage = () => {
  const headerImage =
    'https://i.pinimg.com/originals/b4/da/9d/b4da9d147402b30fd285846e14d8b5e8.jpg'
  return (
    <>
      <Header headerImage={headerImage} heading={'latest series'} />

      <ContentLayout gridStyles={'grid-cols-1'}>
        <ShowAllMedia type="series" />
      </ContentLayout>
    </>
  )
}

export default SeriesPage
