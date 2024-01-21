import { getArticle } from "@/utils";
import { MDXRemote } from "next-mdx-remote/rsc";
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
} from "@/components";
import Link from "next/link";
import Image from "next/image";
type ArticleParams = {
  params: {
    filename: string;
    category: string;
  };
};

export default async function RemoteMdxPage({
  params: { filename },
}: ArticleParams) {
  const { content, title } = getArticle(filename);
  return (
    <>
      <h2>{title}</h2>
      <MDXRemote
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
          Image,
        }}
        source={content}
      />
    </>
  );
}

