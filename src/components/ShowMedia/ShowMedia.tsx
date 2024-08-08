import Button from "../Buttons/Button";

type Props = {
  link: string;
  name: string;
};

const ShowMedia = ({ link, name }: Props) => {
  return (
    <section className="border-2 border-red-600 max-h-[600px] grid grid-rows-[1fr_10fr_1fr] my-4">
      <h1 className="text-center my-auto uppercase">latest {name}</h1>
      <section className=""></section>
      <Button
        name={"more"}
        link={link}
        styles={"capitalize my-auto ml-auto bg-button"}
      />
    </section>
  );
};

export default ShowMedia;
