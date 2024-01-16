import NavItem from "../NavItem";
import NavIcon from "../NavIcon";
import ColorMode from "./ColorMode";
export default function Navbar() {
  return (
    <nav className="hidden md:flex justify-around items-center select-none gap-8">
      <div className="flex gap-4">
        <NavItem path="/" src="/logo.png" />
        <NavItem path="/Post" label="Post" />
        <NavItem path="/Snippet" label="Snippet" />
      </div>
      <div className="flex gap-8">
        <NavIcon
          src="/icons/icon_github.png"
          target="_blank"
          href="https://github.com/Dr-ZHUIM"
        />
        <NavIcon
          src="/icons/icon_user.png"
          target="_blank"
          href="http://www.zhuim.fun/"
        />
        <NavIcon src="/icons/icon_home.png" href="/" />
        <ColorMode />
      </div>
    </nav>
  );
}

