import Header from "../components/Header";

type Props = {
  headerStyles: string;
  heading: string;
};

const HomePage = ({ headerStyles, heading }: Props) => {
  return (
    <>
      <Header headerStyles={headerStyles} heading={heading} />
      <p>Home Page</p>
    </>
  );
};

export default HomePage;
