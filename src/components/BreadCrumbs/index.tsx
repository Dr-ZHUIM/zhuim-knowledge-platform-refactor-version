"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useMemo } from "react";

type BreadLabel = string;
type BreadPath = string;

type BreadCrumbsType = [BreadLabel, BreadPath][];

function splitPath(path: string): BreadCrumbsType {
  const pathpool = path.slice(1).split("/");
  pathpool.pop();
  const result: [BreadLabel, BreadPath][] = [];
  pathpool.reduce((acc, cur) => {
    const next = `${acc}/${cur}`;
    result.push([cur, next]);
    return next;
  }, "");
  return result;
}

export default function BreadCrumbs() {
  const pathname = usePathname();

  const paths = useMemo<BreadCrumbsType>(() => {
    return splitPath(pathname);
  }, [pathname]);

  return (
    <div className="flex gap-4">
      {paths.map(([label, path], index) => (
        <Link key={label} href={path}>
          <div className="text-[var(--color-link)] text-[18px]">
            <span className="hover:text-[var(--color-font)] cursor-pointer mr-2	">
              {label}
            </span>
            <span>{index < paths.length - 1 && ">"}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

