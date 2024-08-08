type Props = {
  headerStyles: string;
  heading?: string;
};

const Header = ({ headerStyles, heading = "" }: Props) => {
  return (
    <header
      className={`h-[250px] ${headerStyles} bg-center bg-no-repeat bg-cover grid grid-cols-3 grid-rows-4`}
    >
      <h1 className="text-4xl text-white col-[2/3] row-[3/4] text-center my-auto uppercase">
        {heading}
      </h1>
    </header>
  );
};

export default Header;
