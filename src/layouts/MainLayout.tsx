import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <section className="relative w-full">
      <Navbar />
      <section className="h-screen ">
        <header className="  h-[250px] bg-hero-pattern bg-center bg-no-repeat bg-cover"></header>
        <Outlet />
      </section>
      <Footer />
    </section>
  );
};

export default MainLayout;
