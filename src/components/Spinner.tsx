import { ClipLoader } from 'react-spinners'

type Props = { loading: boolean }
const override = {
  display: 'block',
  margin: 'auto',
}
const Spinner = ({ loading }: Props) => {
  return (
    <ClipLoader
      color="#000000"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  )
}
export default Spinner
