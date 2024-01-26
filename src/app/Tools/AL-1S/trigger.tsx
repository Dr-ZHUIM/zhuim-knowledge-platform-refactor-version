"use client";

import { useState } from "react";
import styles from "./index.module.scss";

type Aris = {
  id: number;
  animation: true;
  src: string;
};

const imgs = ["/tools/aris/move1.gif", "/tools/aris/move2.gif"];

export default function TriggerButton() {
  const [count, setCount] = useState(0);
  const [arises, setArises] = useState<Aris[]>([]);

  const handleAnimationEnd = (id: number) => {
    setArises((v) => v.filter((aris) => aris.id !== id));
  };

  const triggerBehavior = () => {
    setCount((v) => v + 1);
    setArises((v) => [
      ...v,
      {
        id: Date.now(),
        animation: true,
        src: imgs[Math.floor(Math.random() * 2)],
      },
    ]);
    const audio = new Audio("/tools/aris/cute_noise.mp3");
    audio.play();
    audio.addEventListener("ended", () => {
      audio.remove();
    });
  };

  return (
    <>
      <div className="relative flex flex-col gap-4 items-center z-[2]">
        <div className="font-bold">爱丽丝已经 邦邦咔邦！了</div>
        <div className="font-bold text-[24px]">[{count}]</div>
        <div>次</div>
        <button className="btn btn-primary w-fit" onClick={triggerBehavior}>
          邦邦咔邦！
        </button>
      </div>
      {arises.map((el) => (
        <img
          key={el.id}
          onAnimationEnd={() => handleAnimationEnd(el.id)}
          className={`absolute bottom-0 right-[-100px] object-contain w-[250px] z-[1] ${styles["animation"]}`}
          src={el.src}
          alt="bangbangkabang"
        />
      ))}
    </>
  );
}

