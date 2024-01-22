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
  BreadCrumbs,
  Toc,
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
      <div className="mb-[60px] py-[60px] pl-4 bg-[var(--color-muted-background)] duration-500">
        <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
          <BreadCrumbs />
          <h2 className="mb-0 mt-4 font-bold tracking-[3px]">{title}</h2>
        </div>
      </div>
      <div className="container flex">
        <div className="w-full md:max-w-[28rem] lg:max-w-2xl xl:max-w-4xl">
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
        </div>
        <div className="w-[375px] pl-5 hidden md:block md:w-[20rem] lg:w-[18rem] xl:w-[24rem]">
          <Toc />
        </div>
      </div>
    </>
  );
}

