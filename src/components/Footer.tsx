import { Link } from "react-router-dom";
import Links from "./Navbar/Links";
import Logo from "./Navbar/Logo";

const Footer = () => {
  return (
    <footer className=" bg-[#D9D9D9] text-lg h-fit  w-full p-4 mt-40 grid items-center sm:grid-cols-3  sm:text-xl md:text-xl">
      <Logo
        styles="py-2 px-2 my-4 border-2 border-black w-full  ml-[15%] sm:w-fit sm:border-0"
        logoStyle={""}
      />
      <Links styles="justify-items-center w-full justify-self-center sm:max-w-xs sm:grid sm:grid-cols-2" />
      <Link
        to="/subscibe"
        // className="uppercase sm:ml-auto sm:mr-[15%] py-2 px-2 my-4  "
        className="general-button sm:ml-auto sm:mr-[15%]"
      >
        subscribe
      </Link>
    </footer>
  );
};

export default Footer;
