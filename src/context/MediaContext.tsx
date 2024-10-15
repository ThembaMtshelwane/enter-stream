import React, { createContext, useContext, useEffect, useState } from "react";
import { MediaData } from "../definitions";

interface MediaContextType {
  allMediaData: MediaData[];
  allLoading: boolean;
  error: string | null;
}

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export const MediaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [allMediaData, setAllMedia] = useState<MediaData[]>([]);
  const [allLoading, setAllLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchMediaData = async () => {
      try {
        const res = await fetch(`https://enter-stream-server.vercel.app/api`);
        const data = await res.json();
        // Now you can work with the `allMediaArray`
        setAllMedia(data.media);
        setAllLoading(false);
      } catch (error) {
        setError("Cannot fetch media data");
        console.log(error);
        setAllLoading(false);
      }
    };

    fetchMediaData();
  }, []);

  return (
    <MediaContext.Provider value={{ allMediaData, allLoading, error }}>
      {children}
    </MediaContext.Provider>
  );
};

export const useMedia = () => {
  const context = useContext(MediaContext);
  if (context === undefined) {
    throw new Error("useMedia must be used within a MediaProvider");
  }
  return context;
};
