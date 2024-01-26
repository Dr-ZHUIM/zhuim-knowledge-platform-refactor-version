import Link from "next/link";
import styles from "./index.module.scss";

type ReviewProps = {
  content?: React.ReactNode;
  title: React.ReactNode;
  href: string;
  backgroundImage?: {
    src: string;
    position?: string;
  };
  readMore?: boolean;
};

export default function Review(props: ReviewProps) {
  const { content, title, href, backgroundImage, readMore } = props;
  return (
    <Link className="block" href={href}>
      <div
        className={`relative bg-[var(--color-primary-800)] cursor-pointer w-full md:w-[94%] h-[320px] rounded px-[24px] py-[24px] ${styles["review-container"]}`}
      >
        <div className="text-white">
          <h5 className={`${styles["title"]} duration-300 pt-0 mt-0`}>
            {title}
          </h5>
          {backgroundImage && (
            <div className="absolute -z-10 left-0 top-0 w-full h-full overflow-hidden pointer-events-none">
              <div
                className={`w-full h-full bg-no-repeat bg-cover duration-500 ${styles["background"]}`}
                style={{
                  backgroundImage: `url(${backgroundImage.src})`,
                  backgroundPosition: backgroundImage.position || "right",
                }}
              />
            </div>
          )}
          {content}
          {readMore && (
            <div className="flex gap-2 items-center">
              阅读更多
              <div className={`${styles["read-more"]} duration-300 font-bold`}>
                {"—>"}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

