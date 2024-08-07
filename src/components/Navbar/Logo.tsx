type Props = {
  styles: string;
};
const Logo = ({ styles }: Props) => {
  return (
    <a href="" className={`${styles} ml-[15%]`}>
      <p className="text-3xl  md:text-4xl ">
        <span className="text-blue-600 ">Enter-</span>
        <span>Steam</span>
      </p>
    </a>
  );
};

export default Logo;
