import React from "react";
import ArticleReview from "./ArticleReview";
type ArticleListProps = {
  articles: ArticleReviewDto[];
};

type Categorys = Record<string, ArticleReviewDto[]>;

export default function ArticleList(props: ArticleListProps) {
  const { articles } = props;
  const categorys: Categorys = {};
  articles.map((article) => {
    if (categorys[article.category]) {
      categorys[article.category].push(article);
    } else {
      categorys[article.category] = [article];
    }
  });
  return (
    <div className="flex w-full flex-col gap-8">
      {Object.keys(categorys).map((category) => (
        <section key={category}>
          <div className="flex justify-between items-center px-8">
            <h3>{category}</h3>
            <h5>{categorys[category].length} Articles</h5>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 justify-between justify-items-center">
            {categorys[category].map((article) => (
              <ArticleReview article={article} key={article.id} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

