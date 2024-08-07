type Props = {
  styles: string;
};

const Links = ({ styles }: Props) => {
  return (
    <ul
      className={`${styles}  grid gap-4 items-center w-[100%]  h-fit uppercase `}
    >
      <li className="">
        <a className="nav-link border-2 grid grid-cols-1 " href="#movies">
          movies
        </a>
      </li>
      <li className="">
        <a className="nav-link border-2" href="#series">
          series
        </a>
      </li>
    </ul>
  );
};

export default Links;
