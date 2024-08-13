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
import { MediaData } from "./definitions";

export default function App() {
  // Add media
  const addMedia = async (newMedia: MediaData) => {
    const res = await fetch(`http://localhost:8080/${newMedia.type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMedia),
    });
    return;
  };

  //delete media
  const deleteMedia = async (id: string, type: string) => {
    const res = fetch(`/api/${type}/${id}`, {
      method: "DELETE",
    });
    return;
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
        <Route path="/*" element={<NotFoundPage headerStyles="bg-black" />} />
      </Route>
    )
  ); //
  return <RouterProvider router={router} />;
}
