import AddMedia from '../components/AddMedia'
import Header from '../components/Header'
import ContentLayout from '../layouts/ContentLayout'

const AddPage = () => {
  return (
    <>
      <Header headerStyles="bg-blue-200" heading="Add Movie/Series" />
      <ContentLayout gridStyles="">
        <AddMedia />
      </ContentLayout>
    </>
  )
}
export default AddPage
