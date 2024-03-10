"use client";
import NavItem from "../NavItem";
import MobileMenuToggle from "./MobileMenuToggle";
import MobileMenu from "./MobileMenu";
import { useToggle } from "@/hooks";

export default function MobileNavbar() {
  const [showMenu, toggleShowMenu] = useToggle(false);

  return (
    <>
      <div className="flex relative pr-4 md:hidden justify-between items-center">
        <NavItem path="/" src="/blog/logo.png" />
        <MobileMenuToggle show={showMenu} onToggle={toggleShowMenu} />
        <MobileMenu
          afterNavgate={() => toggleShowMenu(false)}
          show={showMenu}
        />
      </div>
    </>
  );
}

