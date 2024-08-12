type Props = {
  children: React.ReactNode;
  gridStyles: string;
};

const ContentLayout = ({ children, gridStyles }: Props) => {
  return (
    <section
      className={`border-2 border-green-700 min-h-screen grid w-full mx-auto ${gridStyles}`}
    >
      {children}
    </section>
  );
};
export default ContentLayout;
