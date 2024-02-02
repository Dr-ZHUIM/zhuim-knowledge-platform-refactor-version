import React, { useState, useEffect } from "react";
import { PropsWithChildren } from "react";

export default function PokemonPropContent({ children }: PropsWithChildren) {
  return (
    <div className="bg-white rounded-lg flex flex-col items-center py-2 border-[1px] border-[black]">
      {children}
    </div>
  );
}

