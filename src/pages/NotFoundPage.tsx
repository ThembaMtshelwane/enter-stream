import { Link } from 'react-router-dom'
import Header from '../components/Header'
import ContentLayout from '../layouts/ContentLayout'
import Button from '../components/Buttons/Button'

type Props = {
  headerStyles: string
}

const NotFoundPage = ({ headerStyles }: Props) => {
  return (
    <>
      <Header headerStyles={headerStyles} heading="sorry" />
      <ContentLayout gridStyles="grid-cols-1 grid-rows-[0.5fr_0.1fr] items-center text-center justify-items-center">
        <h1 className="text-5xl font-bold">404 Page Not Found</h1>
        <Button name={'Go home'} link={'/'} styles={''} />
      </ContentLayout>
    </>
  )
}

export default NotFoundPage
