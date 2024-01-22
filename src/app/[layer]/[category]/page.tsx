import { ArticleList } from "@/components";
import { getArticles } from "@/utils";

type Params = {
  params: {
    layer: string;
    category: string;
  };
};

export default function Post({ params: { layer, category } }: Params) {
  const articles = getArticles({ layer, category });
  return (
    <div className="container">
      <h1 className="px-8 mb-12">Post</h1>
      <div>{<ArticleList layer={layer} articles={articles} />}</div>
    </div>
  );
}

