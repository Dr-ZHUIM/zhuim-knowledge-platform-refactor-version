import BreadCrumbs from "../../../../components/BreadCrumbs/index";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="my-8">
        <BreadCrumbs />
      </div>
      <div>{children}</div>
    </div>
  );
}

