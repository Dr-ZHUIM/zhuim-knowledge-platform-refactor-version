import { BreadCrumbs, Toc } from "@/components";
import { getArticle, ArticleResType } from "@/utils";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArticleDetail } from "@/components";

type ArticleParams = {
  params: {
    foldername: string;
    category: string;
    layer: string;
  };
};

export default async function RemoteMdxPage({
  params: { foldername, layer },
}: ArticleParams) {
  const articleRes = await getArticle({ foldername, layer });

  if (articleRes.notFound) {
    notFound();
  }

  const {
    code,
    frontmatter: { title, cover },
  } = articleRes as ArticleResType;

  return (
    <>
      <title>{title}</title>
      <div className="relative mb-[60px] pt-[60px] pb-[140px] bg-[var(--color-muted-background)] duration-500">
        <div className="max-w-[375px] px-8 relative md:max-w-3xl article-cover lg:max-w-5xl xl:max-w-7xl mx-auto z-[2] duration-500">
          <BreadCrumbs />
          <h2 className="mb-0 mt-2 py-2 font-bold tracking-[3px] ">{title}</h2>
        </div>
        <Image
          className="absolute animate-float right-0 bottom-[-50px] hidden md:block z-10"
          src="/blog/m.png"
          alt="zhuim"
          width={150}
          height={100}
        />
        {cover && (
          <div
            style={{ backgroundImage: `url(${cover})` }}
            className="absolute backimg-cover z-[1] left-0 top-0 w-full h-full"
          />
        )}
      </div>
      <div className="container flex">
        <div className="w-full md:max-w-[28rem] lg:max-w-2xl xl:max-w-4xl">
          <ArticleDetail code={code} />
        </div>
        <div className="w-[375px] pl-5 hidden md:block md:w-[20rem] lg:w-[18rem] xl:w-[24rem]">
          <Toc levelRange={5} />
        </div>
      </div>
    </>
  );
}

