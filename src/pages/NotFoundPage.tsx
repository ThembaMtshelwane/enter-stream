import { Link } from 'react-router-dom'
import Header from '../components/Header'
import ContentLayout from '../layouts/ContentLayout'

type Props = {
  headerStyles: string
}

const NotFoundPage = ({ headerStyles }: Props) => {
  return (
    <>
      <Header headerStyles={headerStyles} heading="sorry" />
      <ContentLayout styles="">
        <h1>404 Not Found</h1>
        <Link to="/">Go home</Link>
      </ContentLayout>
    </>
  )
}

export default NotFoundPage
