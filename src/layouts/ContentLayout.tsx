type Props = {
  children: any
  styles: string
}

const ContentLayout = ({ children, styles }: Props) => {
  return (
    <section
      className={`border-2 border-green-700 min-h-screen grid w-full mx-auto ${styles}`}
    >
      {children}
    </section>
  )
}
export default ContentLayout
