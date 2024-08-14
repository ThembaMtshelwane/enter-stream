import Header from "../components/Header";
import ShowAllMedia from "../components/ShowMedia/ShowAllMedia";
import ContentLayout from "../layouts/ContentLayout";

const SeriesPage = () => {
  const headerImage =
    "https://s3-alpha-sig.figma.com/img/9698/f24d/d7bb7385cbbbc5b0660bc2a34781be00?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SX1n9Brk5LD8U2cRISvJ5vpSb1dEF8bLJYJy1G2ZvtH3lMYrQgMbf1M0YIvFdQDRJ8sOO9q5AfIsPA2ywJ8J6Km4yCak0HY0SLPN8sBz8~TgO1zpgcEMe-Wh3VVuJrr02Qz8iCrYnMDqdH~r5TW~XoMnDK39Xd09YWcUBpTTOXHah6IF5vj7YynFhUix-EMcgcYokulJ8xZ3PlPvyvvwl5g6HdJTA42jM4eW9xoPFmlrzE9q5orfVpXn5m4pWEWp9jXm~kTCRQF6RIxkfkGvsNdD4Idd5H5dzoNnq5LXkgB0kQFbeu0SsYYzqvw44fkeLb0NphkvUZQZyboBD0jGog__";
  return (
    <>
      <Header headerImage={headerImage} heading={"latest series"} />

      <ContentLayout gridStyles={"grid-cols-1"}>
        <ShowAllMedia type="series" />
      </ContentLayout>
    </>
  );
};

export default SeriesPage;
