import Header from "../components/Header";
import ShowMedia from "../components/ShowMedia/ShowMedia";

type Props = {
  headerStyles: string;
  heading: string;
};

const HomePage = ({ headerStyles, heading }: Props) => {
  return (
    <>
      <Header headerStyles={headerStyles} heading={heading} />
      <section className="border-2 border-green-700 min-h-screen grid grid-cols-1 grid-rows-2 w-full mx-auto gap-4">
        <ShowMedia link="/movies" name="movies" />
        <ShowMedia link="/series" name="series" />
      </section>
    </>
  );
};

export default HomePage;
