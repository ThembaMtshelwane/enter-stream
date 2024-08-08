type Props = {
  styles: string;
  logoStyle: string;
};
const Logo = ({ styles, logoStyle }: Props) => {
  return (
    <a href="/" className={`${styles} ml-[15%]`}>
      <p className="text-3xl  md:text-4xl ">
        <span className={`${logoStyle} `}>Enter-</span>
        <span>Steam</span>
      </p>
    </a>
  );
};

export default Logo;
