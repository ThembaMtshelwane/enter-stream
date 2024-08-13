import { useEffect, useState } from "react";
import { MediaData } from "../../definitions";
import { Link } from "react-router-dom";

type Props = { type: string; isHome?: boolean; name?: string };

const MediaGrid = ({ type, isHome = false }: Props) => {
  const [mediaData, setMediaData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const apiURL = isHome
          ? `http://localhost:8080/${type}?_limit=8`
          : `http://localhost:8080/${type}`;
        const res = await fetch(apiURL);
        const data = await res.json();
        setMediaData(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMedia();
  }, []);

  // console.log(`http://localhost:8080/${type}/`)
  const media = mediaData.map((media: MediaData) => {
    return (
      <section key={media.id} className="h-[300px] border-2 border-red-800">
        <Link key={media.name} to={`/${type}/${media.id}`}>
          {media.name}
        </Link>
      </section>
    );
  });

  return (
    <section className="grid grid-cols-1 grid-rows-2 gap-2 items-center sm:grid-cols-2 sm:grid-row-2 md:grid-cols-3 lg:grid-cols-4">
      {isLoading ? <h2 className="text-6xl">Loading...</h2> : media}
      {/* replace with Spinner */}
    </section>
  );
};

export default MediaGrid;
