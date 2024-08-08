import { Link } from "react-router-dom";
import Header from "../components/Header";

type Props = {
  headerStyles: string;
};

const NotFoundPage = ({ headerStyles }: Props) => {
  return (
    <>
      <Header headerStyles={headerStyles} heading="sorry" />
      <h1>404 Not Found</h1>
      <Link to="/">Go home</Link>
    </>
  );
};

export default NotFoundPage;
