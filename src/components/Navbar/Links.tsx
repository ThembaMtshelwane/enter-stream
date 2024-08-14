import { Link } from "react-router-dom";

type Props = {
  styles: string;
};

const Links = ({ styles }: Props) => {
  return (
    <ul className={`${styles} grid gap-4 items-center w-full h-fit uppercase`}>
      <li className="">
        <Link className="nav-link nav-link-border sm:border-none" to="movies">
          movies
        </Link>
      </li>
      <li className="">
        <Link className="nav-link nav-link-border sm:border-none" to="series">
          series
        </Link>
      </li>
    </ul>
  );
};

export default Links;
