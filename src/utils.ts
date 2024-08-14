import { CountryData, MediaData } from "./definitions";

export const sortCountries = (list: CountryData[]) => {
  list.sort((a: CountryData, b: CountryData) => {
    const nameA = a.name.common.toUpperCase();
    const nameB = b.name.common.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return list;
};

export const generateYearRange = () => {
  const earliest: number = 1888;
  const latest: number = new Date().getFullYear();
  const yearRange: number[] = [];

  for (let year = latest; year >= earliest; year--) {
    yearRange.push(year);
  }
  return yearRange;
};

export const notType = (type: string) => {
  if (type === "movie") return "series";
  return "movie";
};

// Add media
export const addMedia = async (newMedia: MediaData) => {
  let serverURL = `http://localhost:8080/${newMedia.type}`;
  if (newMedia.type === "movie") {
    serverURL = `http://localhost:8080/movies`;
  }
  try {
    const res = await fetch(serverURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMedia),
    });
    if (!res.ok) {
      throw new Error("Failed to add media");
    }
    alert("Media added successfully");
  } catch (error) {
    console.error(error);
    alert("Failed to add media");
  }
  return;
};

//delete media
export const deleteMedia = async (id: string, type: string) => {
  let serverURL = `http://localhost:8080/${type}/${id}`;
  if (type === "movie") {
    serverURL = `/api/movies/${id}`;
  }

  try {
    const res = await fetch(serverURL, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Failed to add media");
    }
    alert("Media deleted successfully");
  } catch (error) {
    console.error(error);
    alert("Failed to delete media");
  }

  return;
};

export const editMedia = async (updatedMedia: MediaData) => {
  let serverURL = `http://localhost:8080/${updatedMedia.type}/${updatedMedia.id}`;
  if (updatedMedia.type === "movie") {
    serverURL = `http://localhost:8080/movies/${updatedMedia.id}`;
  }

  try {
    // Check if the media exists at the specified endpoint
    const checkRes = await fetch(serverURL);
    if (checkRes.ok) {
      // Media exists, proceed to update
      const updateRes = await fetch(serverURL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedMedia),
      });

      if (!updateRes.ok) {
        throw new Error("Failed to update media");
      }
      alert("Media edited successfully");
    } else {
      // Media does not exist, handle accordingly
      console.warn("Media does not exist at the specified endpoint.");
      await addMedia(updatedMedia);
      await deleteMedia(updatedMedia.id, notType(updatedMedia.type));
    }
  } catch (error) {
    console.error("An error occurred while editing media:", error);
    // If any error occurs, fallback to deleting from the old type and adding to the new type
    await deleteMedia(updatedMedia.id, notType(updatedMedia.type));
    await addMedia(updatedMedia);
    alert("Failed to edit media");
  }
};

export const genres = [
  "Action",
  "Comedy",
  "Drama",
  "Horror",
  "Sci-Fi",
  "Romance",
  "Documentary",
];
