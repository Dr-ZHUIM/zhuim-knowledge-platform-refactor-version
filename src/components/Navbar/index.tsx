import DeskTopNavbar from "./DeskTop";
import MobileNavbar from "./Mobile";

export default function Navbar() {
  return (
    <div className="w-full sticky top-0 h-[60px] select-none bg-[var(--color-primary)] text-white">
      <DeskTopNavbar />
      <MobileNavbar />
    </div>
  );
}

