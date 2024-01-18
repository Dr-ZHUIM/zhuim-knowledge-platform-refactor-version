"use client";
import { ArticleList } from "@/components";
import { http_post } from "@/fetch/fetch";
import { useEffect, useState } from "react";

type Params = {
  params: {
    layer: string;
  };
};

type Categorys = Record<string, ArticleReviewDto[]>;

function getLayerList(layer: string) {
  return http_post<ZhuimResponseType<ArticleReviewDto[]>>({
    url: "/api/article/getArticleListByReview",
    data: {
      layer,
    },
  });
}

export default function Post({ params: { layer } }: Params) {
  const [data, setData] = useState<ArticleReviewDto[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    getLayerList(layer)
      .then((res) => {
        setData(res.data.data);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [layer]);

  return (
    <div>
      <h1 className="px-8 mb-12">Post</h1>
      <div>
        {isFetching && <div className="px-8 mb-12">loading...</div>}
        {!isFetching && <ArticleList layer={layer} articles={data} />}
      </div>
    </div>
  );
}

