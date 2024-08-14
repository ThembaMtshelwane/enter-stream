import { Link } from "react-router-dom";

type Props = {
  styles: string;
  logoStyle: string;
};
const Logo = ({ styles, logoStyle }: Props) => {
  return (
    <Link to="/" className={`${styles} w-fit`}>
      <p className="text-2xl  md:text-3xl ">
        <span className={`${logoStyle} `}>Enter-</span>
        <span>Steam</span>
      </p>
    </Link>
  );
};

export default Logo;
