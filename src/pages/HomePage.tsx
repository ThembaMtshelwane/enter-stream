import Header from "../components/Header";
import ShowSomeMedia from "../components/ShowMedia/ShowSomeMedia";
import ContentLayout from "../layouts/ContentLayout";

const HomePage = () => {
  return (
    <>
      <Header
        headerImage="https://s3-alpha-sig.figma.com/img/cb8e/658c/804cdb47a13464820c06f023bf36d962?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oa2C~3HqLOpQs4Q5lVPl6y80Q64L476MsN5waIHjo4zo2wXS1ZLwdLajE6xL2MFy~Nur5JFpPJiAtAiCTJTt~n9~TEu-Je8rMdbmDYoHl2sw1R~l~~94M9c09AC5H-b5lhZkdxpjTLg8FW08H7b-4fgo2I17smrxpr1QvfOWpTdjdKt7Et-rdOWAmJOJ6piC2lUigbJozEqBVixuY7qm6gPcdf1X4~1JBL3DFXwn-~CnM1OqBpwqJUgLx6ubMQoGyTlCeEgIQjKPTOcvvtQkojS7M1K~Jgwkdu6Hi1TTC5pOfQmWDHSwZOJxiiFpiDhAKa6saAV76oziEZubCt1I3g__"
        heading="welcome"
      />
      {/* Home Page layout  2by1 */}
      <ContentLayout gridStyles="grid-cols-1 grid-rows-2 gap-4">
        <ShowSomeMedia link="/movies" name="movies" type="movies" />
        <ShowSomeMedia link="/series" name="series" type="series" />
      </ContentLayout>
    </>
  );
};

export default HomePage;
