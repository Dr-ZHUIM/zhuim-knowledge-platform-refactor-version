import styles from "./index.module.scss";

type DemoType = {
  children: React.ReactNode;
  title?: string;
  style?: React.CSSProperties;
};

export default function Demo({ children, title, style }: DemoType) {
  return (
    <div
      demo-title={`Demo: ${title || ""}`}
      className={`${styles["demo-container"]}`}
      style={style}
    >
      {children}
    </div>
  );
}

