type Props = {
  styles: string;
};

const Links = ({ styles }: Props) => {
  return (
    <ul
      className={`${styles} grid gap-4 items-center w-[100%] h-fit uppercase `}
    >
      <li className="">
        <a className="nav-link nav-link-border sm:border-none" href="#movies">
          movies
        </a>
      </li>
      <li className="">
        <a className="nav-link nav-link-border sm:border-none" href="#series">
          series
        </a>
      </li>
    </ul>
  );
};

export default Links;
