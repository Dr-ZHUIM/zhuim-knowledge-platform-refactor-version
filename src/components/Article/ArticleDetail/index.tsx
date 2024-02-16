import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
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
import Link from "next/link";
import Image from "next/image";

import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkEmoji from "remark-emoji";

import rehypeHighlight from "rehype-highlight";
import rehypeMathjax from "rehype-mathjax";

export default function ArticleDetail(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      options={{
        mdxOptions: {
          rehypePlugins: [rehypeHighlight as any, rehypeMathjax],
          remarkPlugins: [remarkEmoji as any, remarkMath, remarkGfm],
        },
      }}
      components={{
        Aside,
        OverflowText,
        Link,
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        h6: H6,
        Quote,
        Anchor,
        pre: Pre,
        Sup: Sup,
        Mark,
        WaitForImage,
      }}
    />
  );
}

