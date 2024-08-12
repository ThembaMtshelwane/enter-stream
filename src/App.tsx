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
import SingleMediaPage from "./pages/SingleMediaPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />

        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/series/:id" element={<SingleMediaPage type="series" />} />
        <Route path="/movies/:id" element={<SingleMediaPage type="movie" />} />
        <Route path="/*" element={<NotFoundPage headerStyles="bg-black" />} />
      </Route>
    )
  ); //
  return <RouterProvider router={router} />;
}
