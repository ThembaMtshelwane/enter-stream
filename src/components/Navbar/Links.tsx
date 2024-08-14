import { NavLink } from "react-router-dom";

type Props = {
  styles: string;
};

const Links = ({ styles }: Props) => {
  return (
    <ul className={`${styles} grid gap-4 items-center w-full h-fit uppercase`}>
      <li className="">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-link nav-link-border sm:border-none text-[#7379FF]"
              : ""
          }
          to="movies"
        >
          movies
        </NavLink>
      </li>
      <li className="">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-link nav-link-border sm:border-none text-[#7379FF]"
              : ""
          }
          to="series"
        >
          series
        </NavLink>
      </li>
    </ul>
  );
};

export default Links;
