"use client";

import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { useHeadsObserver } from "@/hooks";

type Heading = {
  text: string;
  level: number;
};

const range = "h2,h3,h4,h5,h6";

export default function Toc() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [init, setInit] = useState(false);
  const activeId = useHeadsObserver(range);

  useEffect(() => {
    window.onhashchange = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo(0, element.offsetTop - 120);
        }
      }
      return false;
    };
    const nodes = Array.from(document.querySelectorAll(range))
      .filter((el) => el.id)
      .map((el) => ({
        text: el.id,
        level: Number(el.nodeName.charAt(1)),
      }));
    setHeadings(nodes);
    setInit(true);
  }, []);

  return (
    <ul
      className={`scroll-thin m-0 pb-[25px] pl-[24px] sticky w-full ${styles["list-container"]} top-[200px] overflow-x-hidden whitespace-nowrap text-ellipsis duration-500 ease-out`}
      style={{
        opacity: init ? 1 : 0,
        transform: `translateX(${init ? 0 : "100px"})`,
      }}
    >
      <li className="text-[18px] font-bold tracking-[2px] mb-[16px]">
        TABLE OF CONTENTS
      </li>
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
  );
}

