import { ArticleDetail, BreadCrumbs, Toc } from "@/components";
import { getArticle } from "@/utils";
import { Metadata } from "next";
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
      <title>{title}</title>
      <div className="mb-[60px] pt-[60px] pb-[140px] pl-4 bg-[var(--color-muted-background)] duration-500">
        <div className="w-full relative md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
          <BreadCrumbs />
          <h2 className="mb-0 mt-4 pt-0 font-bold tracking-[3px]">{title}</h2>
          <Image
            className="absolute animate-float right-0 top-20 hidden md:block w-auto"
            src="/m.png"
            alt="zhuim"
            width={150}
            height={100}
          ></Image>
        </div>
      </div>
      <div className="container flex">
        <div className="w-full md:max-w-[28rem] lg:max-w-2xl xl:max-w-4xl">
          <ArticleDetail source={content} />
        </div>
        <div className="w-[375px] pl-5 hidden md:block md:w-[20rem] lg:w-[18rem] xl:w-[24rem]">
          <Toc levelRange={5} />
        </div>
      </div>
    </>
  );
}

