import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddPage from "./pages/AddPage";
import SingleMediaPage, { mediaLoader } from "./pages/SingleMediaPage";
import EditPage from "./pages/EditPage";
import { MediaData } from "./definitions";
import { notType } from "./utils";

export default function App() {
  // Add media
  const addMedia = async (newMedia: MediaData) => {
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
  const deleteMedia = async (id: string, type: string) => {
    let serverURL = `http://localhost:8080/${type}/${id}`;
    if (type === "movie") {
      serverURL = `/api/movies/${id}`;
    }
    const res = fetch(serverURL, {
      method: "DELETE",
    });
    return;
  };

  const editMedia = async (updatedMedia: MediaData) => {
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
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />

        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/add" element={<AddPage addMediaSubmit={addMedia} />} />
        <Route
          path="/:type/:id"
          element={<SingleMediaPage deleteMedia={deleteMedia} />}
          loader={mediaLoader}
        />
        <Route
          path="/edit/:type/:id"
          element={<EditPage editMediaSubmit={editMedia} />}
          loader={mediaLoader}
        />
        <Route path="/*" element={<NotFoundPage headerStyles="bg-black" />} />
      </Route>
    )
  ); //
  return <RouterProvider router={router} />;
}
