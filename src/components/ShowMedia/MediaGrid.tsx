type Props = {};

const MediaGrid = (props: Props) => {
  return (
    <section className="grid grid-cols-1 grid-rows-2 gap-2 items-center sm:grid-cols-2 sm:grid-row-2 md:grid-cols-3 lg:grid-cols-4">
      <section className="h-full border-2 border-red-800"></section>
      <section className="h-full border-2 border-red-800"></section>
      <section className="h-full border-2 border-red-800"></section>
      <section className="h-full border-2 border-red-800"></section>
      <section className="h-full border-2 border-red-800"></section>
      <section className="h-full border-2 border-red-800"></section>
      <section className="h-full border-2 border-red-800"></section>
      <section className="h-full border-2 border-red-800"></section>
    </section>
  );
};

export default MediaGrid;
