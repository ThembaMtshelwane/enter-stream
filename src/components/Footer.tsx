import Button from "./Buttons/Button";
import Links from "./Navbar/Links";
import Logo from "./Navbar/Logo";

const Footer = () => {
  return (
    <nav
      className={` grid items-center text-lg h-fit sm:grid-cols-3 p-4 sm:text-xl md:text-3xl`}
    >
      <Logo styles="" logoStyle={""} />
      <Links styles="hidden justify-items-center justify-self-center max-w-xs sm:grid sm:grid-cols-2" />
      <Button
        name="subscribe"
        link="#subscibe"
        styles=" hidden ml-auto mr-[15%] py-2 px-8 sm:block"
      />
    </nav>
  );
};

export default Footer;