type Props = {
  headerImage: string;
  heading?: string;
};

const Header = ({ headerImage, heading = "" }: Props) => {
  return (
    <header
      className={
        " max-h-fit h-[230px] bg-center bg-no-repeat bg-cover grid grid-cols-3 grid-rows-5 pb-5 bg-blue-400"
      }
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <h1 className="text-4xl text-white col-[1/4] row-[4/6] text-center my-auto uppercase">
        {heading}
      </h1>
    </header>
  );
};

export default Header;
