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

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />

        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route
          path="/:type/:id"
          element={<SingleMediaPage />}
          loader={mediaLoader}
        />
        <Route path="/*" element={<NotFoundPage headerStyles="bg-black" />} />
      </Route>
    )
  ); //
  return <RouterProvider router={router} />;
}
