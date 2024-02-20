"use client";
import { MathJax } from "better-react-mathjax";

export function IMath({ children }: React.PropsWithChildren) {
  return (
    <>
      <MathJax inline>`{children}`</MathJax>
    </>
  );
}

export function BMath({ children }: React.PropsWithChildren) {
  return <MathJax>`{children}`</MathJax>;
}

