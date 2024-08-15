import Header from "../components/Header";
import ShowAllMedia from "../components/ShowMedia/ShowAllMedia";
import ContentLayout from "../layouts/ContentLayout";

const MoviesPage = () => {
  return (
    <>
      <Header
        headerImage={
          "https://image.tmdb.org/t/p/original/vuza0WqY239yBXOadKlGwJsZJFE.jpg"
        }
        heading={"latest movies"}
      />
      <ContentLayout gridStyles={"grid-cols-1"}>
        <ShowAllMedia type="movies" />
      </ContentLayout>
    </>
  );
};

export default MoviesPage;
