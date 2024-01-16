import NavIcon from "../NavIcon";
import ColorMode from "../DeskTop/ColorMode";
import NavItem from "../NavItem";

type MobileMenuProps = {
  show: boolean;
  afterNavgate?: () => void;
};

export default function MobileMenu({ show, afterNavgate }: MobileMenuProps) {
  const navItemProps = {
    style: { fontWeight: "bold" },
    light: true,
    onClick: afterNavgate,
  };
  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? 1 : 0,
        transform: show ? "translateX(0)" : "translateX(-100%)",
      }}
      className="absolute p-[20px] w-full h-[calc(100vh-60px)] top-[60px] left-0 bg-[var(--color-bg)] duration-500"
    >
      <div className="flex flex-col h-full justify-between">
        {/* items */}
        <div className="flex flex-col">
          <NavItem {...navItemProps} path="/Post" label="Post" />
          <NavItem {...navItemProps} path="/Snippet" label="Snippet" />
        </div>
        {/* icons */}
        <div className="flex flex-row-reverse gap-8 mb-[20px]">
          <ColorMode isMobile={true} />
          <NavIcon size={30} src="/icons/icon_home_dark.png" href="/" />
          <NavIcon
            size={30}
            src="/icons/icon_user_dark.png"
            target="_blank"
            href="http://www.zhuim.fun/"
          />
          <NavIcon
            size={30}
            src="/icons/icon_github_dark.png"
            target="_blank"
            href="https://github.com/Dr-ZHUIM"
          />
        </div>
      </div>
    </div>
  );
}
