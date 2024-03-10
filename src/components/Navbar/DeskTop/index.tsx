import NavItem from "../NavItem";
import NavIcon from "../NavIcon";
import ColorMode from "./ColorMode";
import router from "@/router";
export default function Navbar() {
  return (
    <nav className="hidden md:flex justify-around items-center select-none gap-8">
      <div className="flex gap-4">
        <NavItem path="/" src="/blog/logo.png" />
        {router.map((route) => (
          <NavItem path={route.path} label={route.label} key={route.label} />
        ))}
      </div>
      <div className="flex gap-8">
        <NavIcon
          src="/blog/icons/icon_github.png"
          target="_blank"
          href="https://github.com/Dr-ZHUIM"
        />
        <NavIcon
          src="/blog/icons/icon_user.png"
          target="_blank"
          href="http://www.zhuim.fun/"
        />
        <NavIcon src="/blog/icons/icon_home.png" href="/" />
        <ColorMode />
      </div>
    </nav>
  );
}

