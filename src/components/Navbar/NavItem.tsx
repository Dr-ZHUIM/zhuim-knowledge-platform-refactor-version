import Image from "next/image";
import Link from "next/link";

type NavItemProps = {
  light?: boolean;
  path?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
} & XOR<{ label: string }, { src: string }>;

export default function NavItem({
  label,
  src,
  path,
  style,
  light = false,
  onClick,
}: NavItemProps) {
  return (
    <Link onClick={onClick} href={path || ""}>
      {src && <Image style={style} width={150} height={60} src={src} alt="" />}
      {label && (
        <div
          style={style}
          className={`leading-[60px] px-[1rem] text-nav  duration-500 ${
            light
              ? "text-[var(--color-font)]"
              : "hover:bg-[var(--color-light)] hover:text-white text-[var(--color-f-unhover)]"
          }`}
        >
          {label}
        </div>
      )}
    </Link>
  );
}

