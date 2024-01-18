import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import Link from "next/link";

type ArticleReviewProps = {
  article: ArticleReviewDto;
};

export default function ArticleReview({ article }: ArticleReviewProps) {
  return (
    <div
      className={`bg-[var(--color-primary-800)] cursor-pointer w-full md:w-[94%] h-[320px] rounded px-[24px] py-[24px] ${styles["article-container"]}`}
    >
      <Link href={article.pathname}>
        <div className="text-white">
          <h5 className={`${styles["title"]} duration-300`}>{article.title}</h5>
          <p className="text-[16px]">{article.abstract || "该文章没有摘要"}</p>
          <div className="flex gap-2 items-center">
            阅读更多
            <div className={`${styles["read-more"]} duration-300 font-bold`}>
              {"—>"}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

