import AddMedia from '../components/AddMedia'
import Header from '../components/Header'
import ShowSomeMedia from '../components/ShowMedia/ShowSomeMedia'
import ContentLayout from '../layouts/ContentLayout'

const AddPage = () => {
  return (
    <>
      <Header headerStyles="bg-blue-200" heading="Add Movie/Series" />
      <ContentLayout gridStyles="grid-cols-1 grid-rows-1 gap-4">
        <AddMedia />
      </ContentLayout>
    </>
  )
}
export default AddPage
