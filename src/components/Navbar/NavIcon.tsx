import Image from "next/image";
import Link from "next/link";

type NavIconBehavior = XOR<
  { onClick: () => void },
  { href: string; target?: "_blank" | "_self" | "_parent" }
>;

type NavIconProps = {
  src: string;
  size?: number;
  style?: React.CSSProperties;
} & NavIconBehavior;

export default function NavIcon({
  src,
  onClick,
  href,
  target,
  style,
  size = 25,
}: NavIconProps) {
  const ImageProps = {
    width: size,
    height: size,
    className: "opacity-100 duration-200 cursor-pointer hover:opacity-70",
  };

  if (onClick) {
    return (
      <Image style={style} {...ImageProps} src={src} alt="" onClick={onClick} />
    );
  } else if (href) {
    return (
      <Link target={target || "_self"} href={href}>
        <Image style={style} {...ImageProps} src={src} alt="" />
      </Link>
    );
  }
  return <Image style={style} {...ImageProps} src={src} alt="" />;
}

