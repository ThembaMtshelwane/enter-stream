import Header from "../components/Header";
import ShowAllMedia from "../components/ShowMedia/ShowAllMedia";
import ContentLayout from "../layouts/ContentLayout";

const MoviesPage = () => {
  return (
    <>
      <Header
        headerImage={
          "https://s3-alpha-sig.figma.com/img/3c8d/e6ca/c00fa76a3ff2966712f3aa904b3d9177?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=izSp9ZrwNJUQNarPAR~fcS3toVPERiCrrVmzmBcJHZ6220yIbjNUujbmqHh-hU0dH5gQgfkbTJHG7kV5MThQCYYHmEbESqcQOSi2U-SsUTZWozFUKWSAE5jYX47~aK4PZnu48NwC0izGX-t5AWT-PJyYSyzBxrEUqmIqqVqLKWoSmRpV~GRPrfU4KhSgwyL6mt5T~MUCanMokfzFcOpaLGKuUsbywUOH0DwapzAu~2cpY6gbQ1i2-yWDcSDZQWkjo~oHXUYKVzlhWgoy9O7pnDPAjbg5uTInqkqHdXm4cDsMJRu5GNA2vWNmJ5dZMvaYlHz46EvINHByeOKUgkMRJA__"
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
