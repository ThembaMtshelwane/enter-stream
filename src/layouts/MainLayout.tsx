import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <section className="h-screen ">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default MainLayout;
