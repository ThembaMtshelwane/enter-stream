import { useLoaderData } from "react-router-dom";
import { MediaData } from "../definitions";
import Header from "../components/Header";
import ContentLayout from "../layouts/ContentLayout";
import EditMedia from "../components/EditMedia";

type Props = { editMediaSubmit: (data: MediaData) => void };

const EditPage = ({ editMediaSubmit }: Props) => {
  const media = useLoaderData() as MediaData;

  return (
    <>
      <Header headerStyles="bg-blue-200" heading={`Edit ${media.name}`} />
      <ContentLayout gridStyles="">
        <EditMedia oldData={media} editMediaSubmit={editMediaSubmit} />
      </ContentLayout>
    </>
  );
};

export default EditPage;
