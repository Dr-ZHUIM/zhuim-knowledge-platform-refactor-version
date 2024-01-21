import Link from "next/link";
import styles from "./index.module.scss";

type QuoteProps = {
  to?: string;
  title: React.ReactNode;
};

export default function Quote(props: QuoteProps) {
  return (
    <>
      {props.to ? (
        <div className={`${styles["quote-title"]} ${styles["quote-archor"]}`}>
          <Link href={props.to} target="_blank">
            {props.title}
          </Link>
        </div>
      ) : (
        <div className={styles["quote-title"]}>{props.title}</div>
      )}
    </>
  );
}

