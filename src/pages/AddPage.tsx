import AddMedia from "../components/AddMedia";
import Header from "../components/Header";
import { MediaData } from "../definitions";
import ContentLayout from "../layouts/ContentLayout";

type Props = {
  addMediaSubmit: (data: MediaData) => void;
};

const AddPage = ({ addMediaSubmit }: Props) => {
  return (
    <>
      <Header headerImage="bg-blue-200" heading="Add Movie/Series" />
      <ContentLayout gridStyles="">
        <AddMedia addMediaSubmit={addMediaSubmit} />
      </ContentLayout>
    </>
  );
};
export default AddPage;
