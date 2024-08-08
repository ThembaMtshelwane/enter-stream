import { Link } from "react-router-dom";
import Links from "./Navbar/Links";
import Logo from "./Navbar/Logo";

const Footer = () => {
  return (
    <footer
      className={` grid items-center text-lg h-fit sm:grid-cols-3 p-4 sm:text-xl md:text-3xl bg-[#D9D9D9]`}
    >
      <Logo styles="" logoStyle={""} />
      <Links styles="hidden justify-items-center justify-self-center max-w-xs sm:grid sm:grid-cols-2" />
      <Link
        to="/subscibe"
        className="hidden ml-auto mr-[15%] py-2 px-8 sm:block uppercase"
      >
        subscribe
      </Link>
    </footer>
  );
};

export default Footer;
