"use client";

import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
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
} from "@/components";

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
  Pre,
  Sup,
  Quote,
  WaitForImage,
};

export default function BundleVersionClient({ code }: { code: string }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return <Component components={globalComponents} />;
}

