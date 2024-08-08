import { Link } from "react-router-dom";

type Props = {
  name: string;
  link: string;
  styles: string;
};

const Button = ({ name, link, styles }: Props) => {
  return (
    <Link
      to={link}
      className={`${styles} rounded-full tracking-wider uppercase ml-auto py-2 px-8 bg-button text-white`}
    >
      {name}
    </Link>
  );
};

export default Button;
