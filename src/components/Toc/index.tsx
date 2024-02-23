"use client";

import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { useHeadsObserver } from "@/hooks";
import Link from "next/link";

type Heading = {
  text: string;
  level: number;
};

type TocProps = {
  levelRange: number;
};

const map: Record<number, string> = {
  1: "h2",
  2: "h2,h3",
  3: "h2,h3,h4",
  4: "h2,h3,h4,h5",
  5: "h2,h3,h4,h5,h6",
};

function getHeadingsWithRange(range: number) {
  return Array.from(document.querySelectorAll(map[range]))
    .filter((el) => el.id)
    .map((el) => ({
      text: el.id,
      level: Number(el.nodeName.charAt(1)),
    }));
}

export default function Toc(props: TocProps) {
  const { levelRange } = props;
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [init, setInit] = useState(false);
  const activeId = useHeadsObserver(map[levelRange]);

  useEffect(() => {
    const nodes = getHeadingsWithRange(levelRange);
    setHeadings(nodes);
    setInit(true);
  }, [levelRange]);

  return (
    <div className="top-[200px] sticky w-full">
      <div className="text-[18px] font-bold tracking-[2px] mb-[14px] text-center">
        TABLE OF CONTENTS
      </div>
      <ul
        className={`scroll-thin m-0 pb-[25px] pl-[24px] ${styles["list-container"]}  overflow-x-hidden whitespace-nowrap text-ellipsis duration-500 ease-out`}
        style={{
          opacity: init ? 1 : 0,
          transform: `translateX(${init ? 0 : "100px"})`,
        }}
      >
        {headings.map((item) => {
          return (
            <li
              className={`${
                styles[`list-level-${item.level}`]
              } whitespace-normal`}
              key={item.text}
            >
              <a
                className="duration-500"
                style={{
                  color:
                    activeId === item.text
                      ? "var(--color-muted)"
                      : "var(--color-font)",
                }}
                href={`#${item.text}`}
              >
                {item.text}
              </a>
            </li>
          );
        })}
        {headings.length === 0 && (
          <li className="text-[var(--color-link)] ml-12">No Headings</li>
        )}
      </ul>
    </div>
  );
}

