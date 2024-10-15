import { MediaData } from "../../definitions";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import { useMedia } from "../../context/MediaContext";
import { useEffect, useState } from "react";

type Props = { type: string; isHome?: boolean; name?: string };

const MediaGrid = ({ type, isHome = false }: Props) => {
  const { allMediaData, allLoading } = useMedia();
  const [media, setMedia] = useState<MediaData[]>([]);

  useEffect(() => {

    const processData = () => {
      const appropriateMedia = allMediaData.filter(
        (media: MediaData) => media.type === type
      );

      const minimizedMedia = isHome
        ? appropriateMedia.slice(0, 4)
        : appropriateMedia;

      setMedia(minimizedMedia);
    };
    processData();
  }, [allMediaData, isHome, type]);

  return (
    <>
      {allLoading ? (
        <Spinner loading={allLoading} />
      ) : (
        <section className="grid grid-cols-1 grid-rows-2 gap-2 items-center sm:grid-cols-2 sm:grid-row-2 xl:grid-cols-3 2xl:grid-cols-4">
          {media.map((media: MediaData) => {
            return (
              <Link
                to={`/${type}/${media.id}`}
                key={media.id}
                className="m-2 border-2 border-red-500"
              >
                <img
                  src={media.imageURL}
                  alt={media.name}
                  className="h-[520px] object-cover w-[350px] mx-auto rounded-xl"
                />
              </Link>
            );
          })}
        </section>
      )}
    </>
  );
};

export default MediaGrid;
