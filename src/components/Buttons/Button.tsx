type Props = {
  name: string;
  link: string;
  styles: string;
};

const Button = ({ name, link, styles }: Props) => {
  return (
    <a
      href={link}
      className={`${styles} rounded-full tracking-wider uppercase`}
    >
      {name}
    </a>
  );
};

export default Button;
