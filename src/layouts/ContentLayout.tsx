type Props = {
  children: React.ReactNode
  gridStyles: string
}

const ContentLayout = ({ children, gridStyles }: Props) => {
  return (
    <section className={` min-h-screen grid w-full mx-auto ${gridStyles}`}>
      {children}
    </section>
  )
}
export default ContentLayout
