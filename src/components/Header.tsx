type Props = {
  headerStyles: string
  heading?: string
}

const Header = ({ headerStyles, heading = '' }: Props) => {
  return (
    <header
      className={`max-h-fit h-[230px] ${headerStyles} bg-center bg-no-repeat bg-cover grid grid-cols-3 grid-rows-5 pb-5`}
    >
      <h1 className="text-4xl text-white col-[1/4] row-[4/6] text-center my-auto uppercase">
        {heading}
      </h1>
    </header>
  )
}

export default Header
