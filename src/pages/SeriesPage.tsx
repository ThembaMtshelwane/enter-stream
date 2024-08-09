import Header from '../components/Header'
import ShowAllMedia from '../components/ShowMedia/ShowAllMedia'
import ContentLayout from '../layouts/ContentLayout'

const SeriesPage = () => {
  return (
    <>
      <Header headerStyles="bg-blue-400" heading={'latest series'} />

      <ContentLayout gridStyles={'grid-cols-1'}>
        <ShowAllMedia type="series" />
      </ContentLayout>
    </>
  )
}

export default SeriesPage
