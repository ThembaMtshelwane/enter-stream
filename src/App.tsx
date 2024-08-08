import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage"; // Home page

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route index element={<HomePage />} />)
  ); // Creates router
  return <RouterProvider router={router} />;
}
