import { useState } from "react";
import Button from "../Buttons/Button";
import Links from "./Links";
import Logo from "./Logo";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navCols, seNavCols] = useState("grid-cols-2");
  const [overlap, setOverlap] = useState("");

  return (
    <nav
      className={` grid items-center text-lg ${navCols} h-fit sm:grid-cols-3  sm:text-xl md:text-xl absolute w-full p-4 text-white`}
    >
      <Logo styles={`${overlap}  ml-[15%]`} logoStyle={"text-[#7379FF]"} />
      <Links styles="hidden justify-items-center justify-self-center max-w-xs sm:grid sm:grid-cols-2" />
      <Button
        name="subscribe"
        link="/subscribe"
        styles=" hidden ml-auto mr-[15%] py-2 px-8 sm:block bg-button"
      />

      {toggleMenu ? (
        <div
          className={`bg-blue-400 ${overlap} p-5 grid grid-cols-1 grid-rows-[1fr_2fr_1fr]  gap-4 sm:hidden`}
        >
          <button
            className="nav-link-border "
            onClick={() => {
              setToggleMenu((prevState) => !prevState);
              seNavCols("grid-cols-2");
              setOverlap("");
            }}
          >
            <IoClose />
          </button>
          <Links styles="grid-cols-1 grid-rows-2" />
          <Button
            name="subscribe"
            link="/subscribe"
            styles="rounded-none border-2 nav-link-border"
          />
        </div>
      ) : (
        <button
          className="ml-auto mr-[15%] sm:hidden text-white"
          onClick={() => {
            setToggleMenu((prevState) => !prevState);
            seNavCols("grid-cols-1");
            setOverlap("col-[1/2] row-span-full");
          }}
        >
          <TiThMenu />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
