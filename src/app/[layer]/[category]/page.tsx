"use client";
import { useEffect, useState } from "react";

import { http_post } from "@/fetch/fetch";
import BreadCrumbs from "../../../components/BreadCrumbs/index";
import { ArticleList } from "@/components";
type Params = {
  params: {
    layer: string;
    category: string;
  };
};

type QueryParams = {
  layer: string;
  category: string;
};

function getArticleList(data: QueryParams) {
  return http_post<ZhuimResponseType<ArticleReviewDto[]>>({
    url: "/api/article/getArticleListByReview",
    data,
  });
}

export default function ArticleListDifferCategory({
  params: { category, layer },
}: Params) {
  const [data, setData] = useState<ArticleReviewDto[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    getArticleList({ category, layer })
      .then((res) => {
        setData(res.data.data);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [category, layer]);

  return (
    <div>
      {isFetching && <div className="px-8 mb-12">loading...</div>}
      {!isFetching && <ArticleList layer={layer} articles={data} />}
    </div>
  );
}

