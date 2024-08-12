import ContentLayout from "../layouts/ContentLayout";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MediaData } from "../definitions";

type Props = {
  type: string;
};

const SingleMediaPage = ({ type }: Props) => {
  const { id } = useParams();
  const [media, setMediaData] = useState<MediaData>({
    name: "",
    description: "",
    id: "",
    country: "",
    imageURL: "",
    type: "",
    year: "",
    genre: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSingleMedia = async () => {
      try {
        const res = await fetch(`http://localhost:8080/${type}/${id}`);
        console.log(type);

        const data = await res.json();
        setMediaData(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSingleMedia();
  }, []);

  return (
    <>
      <Header headerStyles="bg-purple-200" heading="Movie Name" />
      <ContentLayout gridStyles={"grid-cols-1"}>
        <section className="border-2 border-blue-600 flex items-center my-4 mx-auto w-full sm:w-[90%] md:w-[80%] lg:w-[80%]">
          <section className="border-2 border-red-800 h-[70%] flex ">
            <img
              className="w-full h-full"
              src="https://s3-alpha-sig.figma.com/img/9698/f24d/d7bb7385cbbbc5b0660bc2a34781be00?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SX1n9Brk5LD8U2cRISvJ5vpSb1dEF8bLJYJy1G2ZvtH3lMYrQgMbf1M0YIvFdQDRJ8sOO9q5AfIsPA2ywJ8J6Km4yCak0HY0SLPN8sBz8~TgO1zpgcEMe-Wh3VVuJrr02Qz8iCrYnMDqdH~r5TW~XoMnDK39Xd09YWcUBpTTOXHah6IF5vj7YynFhUix-EMcgcYokulJ8xZ3PlPvyvvwl5g6HdJTA42jM4eW9xoPFmlrzE9q5orfVpXn5m4pWEWp9jXm~kTCRQF6RIxkfkGvsNdD4Idd5H5dzoNnq5LXkgB0kQFbeu0SsYYzqvw44fkeLb0NphkvUZQZyboBD0jGog__"
              alt=""
            />

            <div className="w-[100%] border-2 border-black flex flex-col justify-center p-10 gap-4">
              <h2 className="text-5xl">{media.name}</h2>
              <p>{media.description}</p>
              <div className="py-3">
                <p>Country:{media.country}</p>
                <p>Genre:{media.genre}</p>
                <p>Year:{media.year}</p>
                <p className="capitalize">Type:{media.type}</p>
              </div>
              <div className="flex">
                <button className="general-button mr-5">Edit</button>
                <button className="general-button">Delete</button>
              </div>
            </div>
          </section>
        </section>
      </ContentLayout>
    </>
  );
};

export default SingleMediaPage;
