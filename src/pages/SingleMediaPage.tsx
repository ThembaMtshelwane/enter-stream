import ContentLayout from "../layouts/ContentLayout";
import Header from "../components/Header";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { MediaData } from "../definitions";
import { useNavigate } from "react-router-dom";

type Params = {
  id: string;
  type: string;
};

type Props = {
  deleteMedia: (id: string, type: string) => void;
};

const SingleMediaPage = ({ deleteMedia }: Props) => {
  const media = useLoaderData() as MediaData;
  const { type } = useParams();
  const navigate = useNavigate();
  const onDeleteClick = (id: string, type: string) => {
    const confirm = window.confirm(
      `Are you sure you want to delete this ${type} `
    );
    if (!confirm) return;

    deleteMedia(id, type);
    if (type === "movie") {
      return navigate(`/movies`);
    }

    // toast.success(`${type} deleted successfully `);
    return navigate(`/${type}`);
  };

  return (
    <>
      <Header headerImage={media.imageURL} heading={media.name} />

      <ContentLayout gridStyles={"grid-cols-1"}>
        <section className=" h-fit min-h-screen md:h-[120vh] flex  my-4 mx-auto w-full sm:p-5 sm:w-[100%] md:w-[95%] lg:w-[80%]">
          <section className=" sm:h-[50%]  w-[90%] sm:w-full mx-auto justify-center gap-4 flex flex-col  sm:flex-row my-10">
            <div className="">
              <img
                className="w-[380px] h-full mx-auto"
                src={media.imageURL}
                alt={media.name}
              />
            </div>

            <div className="h-fit sm:w-[50%]  flex flex-col  gap-4">
              <h2 className="text-4xl font-bold">{media.name}</h2>
              <p className="text-justify">{media.description}</p>
              <div className="py-3">
                <p>
                  <span className="font-semibold">Country:</span>{" "}
                  <span>{media.country}</span>{" "}
                </p>
                <p>
                  <span className="font-semibold">Genre:</span>{" "}
                  <span> {media.genre}</span>
                </p>
                <p>
                  <span className="font-semibold">Year:</span>{" "}
                  <span>{media.year}</span>{" "}
                </p>
                <p>
                  <span className="font-semibold">Type:</span>{" "}
                  <span className="capitalize"> {media.type}</span>{" "}
                </p>
              </div>
              <div className="flex">
                <Link
                  className="general-button mr-5"
                  to={`/edit/${type}/${media.id}`}
                >
                  Edit
                </Link>
                <button
                  onClick={() => onDeleteClick(media.id, media.type)}
                  className="general-button"
                >
                  Delete
                </button>
              </div>
            </div>
          </section>
        </section>
      </ContentLayout>
    </>
  );
};

const mediaLoader = async ({ params }: { params: Params }) => {
  const res = await fetch(`http://localhost:8080/${params.type}/${params.id}`);
  const data: MediaData = await res.json();
  return data;
};

export { SingleMediaPage as default, mediaLoader };
