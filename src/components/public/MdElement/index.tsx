"use client";
import { Image, Tooltip, message } from "antd";
import { PropsWithChildren, useMemo, useRef } from "react";
import styles from "./index.module.scss";
import { CopyOutlined } from "@ant-design/icons";
function TextResolver(text: string) {
  return text;
  // .toLowerCase()
  // .replace(/[^a-z0-9 ]/g, '')
  // .replace(/[ ]/g, '-');
}

function getAnchor(node: any): string {
  if (typeof node !== "object") {
    return TextResolver(`${node}`);
  } else if (typeof node === "object") {
    if (node instanceof Array) {
      return node.reduce((pre, cur) => pre + getAnchor(cur), "");
    } else if (node.props) {
      return getAnchor(node.props.children);
    }
  }
  throw new Error("node cannot be resolved \nyour node is " + node);
}

export { default as Quote } from "./Quote/Quote";

export function Anchor({
  children,
  target,
}: {
  children: React.ReactNode;
  target?: string;
}) {
  const id = useMemo(() => {
    return target || getAnchor(children);
  }, [target, children]);
  function scrollToAnchorById(id?: string) {
    const node = id && document.getElementById(id);
    if (node) {
      document.documentElement.scrollTo({ top: node.offsetTop - 60 });
    }
  }
  return (
    <span
      className="text-[#3eaf7c] cursor-pointer mr-2"
      onClick={() => scrollToAnchorById(id)}
    >
      {children}
    </span>
  );
}

export function H1({ children }: PropsWithChildren) {
  const anchor = getAnchor(children);
  return (
    <h1 className="flex items-center" id={anchor}>
      <Anchor target={anchor}>§</Anchor>
      {children}
    </h1>
  );
}

export function H2({ children }: PropsWithChildren) {
  const anchor = getAnchor(children);
  return (
    <h2 id={anchor}>
      <Anchor target={anchor}>§</Anchor>
      {children}
    </h2>
  );
}

export function H3({ children }: PropsWithChildren) {
  const anchor = getAnchor(children);
  return (
    <h3 className="flex items-center" id={anchor}>
      <Anchor target={anchor}>§</Anchor>
      {children}
    </h3>
  );
}

export function H4({ children }: PropsWithChildren) {
  const anchor = getAnchor(children);
  return (
    <h4 className="flex items-center font-bold" id={anchor}>
      <Anchor target={anchor}>§</Anchor>
      {children}
    </h4>
  );
}

export function H5({ children }: PropsWithChildren) {
  const anchor = getAnchor(children);
  return (
    <h5 className="flex items-center font-bold" id={anchor}>
      <Anchor target={anchor}>§</Anchor>
      {children}
    </h5>
  );
}

export function H6({ children }: PropsWithChildren) {
  const anchor = getAnchor(children);
  return (
    <h6 className="flex items-center font-bold" id={anchor}>
      <Anchor target={anchor}>§</Anchor>
      {children}
    </h6>
  );
}

export function Pre({ children }: PropsWithChildren) {
  const divRef = useRef<HTMLDivElement | null>(null);
  const handleCopy = async () => {
    if (divRef.current) {
      navigator.clipboard.writeText(divRef.current.innerText).then(() => {
        message.success({
          content: "复制成功!",
        });
      });
    }
  };
  return (
    <pre className={styles.pre}>
      <CopyOutlined onClick={handleCopy} className={styles["copy-btn"]} />
      <div ref={divRef}>{children}</div>
    </pre>
  );
}

export function Mark({ children }: PropsWithChildren) {
  return <span className={styles.mark}>{children}</span>;
}

export function Sup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Tooltip title={title}>
      <sup className="cursor-pointer">{children || "注"}</sup>
    </Tooltip>
  );
}

