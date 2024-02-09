import { ArticleList } from "@/components";
import { getArticles } from "@/utils";
import { notFound } from "next/navigation";

type Params = {
  params: {
    layer: string;
  };
};

export default function Post({ params: { layer } }: Params) {
  const articles = getArticles({ layer });
  if (!articles.length) {
    notFound();
  }
  return (
    <>
      <title>{layer}</title>
      <div className="container">
        <h1 className="px-8 mb-12">{layer}</h1>
        <div>{<ArticleList layer={layer} articles={articles} />}</div>
      </div>
    </>
  );
}

