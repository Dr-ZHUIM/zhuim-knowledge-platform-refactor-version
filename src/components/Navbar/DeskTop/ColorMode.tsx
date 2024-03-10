"use client";

import React, { useState } from "react";
import NavIcon from "../NavIcon";

type ColorModeProps = {
  isMobile?: boolean;
  size?: number;
};

export default function ColorMode({
  isMobile = false,
  size = 25,
}: ColorModeProps) {
  const [colorMode, setColorMode] = useState("light");

  const getsrc = () => {
    if (colorMode === "light") {
      return isMobile
        ? "/blog/icons/icon_sun_dark.png"
        : "/blog/icons/icon_sun.png";
    } else {
      return isMobile
        ? "/blog/icons/icon_moon_dark.png"
        : "/blog/icons/icon_moon.png";
    }
  };

  const toggleColorMode = () => {
    const targetColorMode = colorMode === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", targetColorMode);
    setColorMode(targetColorMode);
  };

  return (
    <NavIcon
      size={size}
      onClick={toggleColorMode}
      style={{
        transform: `rotate(${colorMode === "light" ? 90 : 0}deg)`,
      }}
      src={getsrc()}
    />
  );
}

