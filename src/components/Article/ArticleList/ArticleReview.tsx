import styles from "./index.module.scss";
import { Review } from "@/components";

type ArticleReviewProps = {
  article: ArticleReviewDto;
};

export default function ArticleReview({ article }: ArticleReviewProps) {
  return (
    <>
      <Review
        content={
          <>
            <p className="text-[16px]">
              {article.abstract || "该文章没有摘要"}
            </p>
          </>
        }
        readMore={true}
        href={article.pathname}
        title={article.title}
      />
    </>
  );
}

