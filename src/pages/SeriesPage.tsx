import Header from '../components/Header'
import ContentLayout from '../layouts/ContentLayout'

const SeriesPage = () => {
  return (
    <>
      <Header headerStyles="bg-blue-400" heading={'latest series'} />
      <ContentLayout styles="">
        <p>Series</p>
      </ContentLayout>
    </>
  )
}

export default SeriesPage
