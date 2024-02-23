"use client";

import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { MathJaxContext } from "better-react-mathjax";
import {
  Aside,
  OverflowText,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Anchor,
  Mark,
  Pre,
  Sup,
  Quote,
  WaitForImage,
  IMath,
  BMath,
  Demo,
} from "@/components";
import Link from "next/link";
import { Image } from "antd";

const globalComponents = {
  Aside,
  OverflowText,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  Anchor,
  Mark,
  pre: Pre,
  Sup,
  Quote,
  WaitForImage,
  Im: IMath,
  Bm: BMath,
  Link,
  Demo,
  Image,
};

export default function BundleVersionClient({ code }: { code: string }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  const config = useMemo(() => ({ loader: { load: ["input/asciimath"] } }), []);

  return (
    <MathJaxContext config={config}>
      <Component components={globalComponents} />
    </MathJaxContext>
  );
}

