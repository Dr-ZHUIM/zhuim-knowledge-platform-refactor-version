import { MDXRemote } from "next-mdx-remote/rsc";

type ArticleParams = {
  params: {
    title: string;
    category: string;
  };
};

export async function getData(title: string) {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const res = await fetch(
    `http://127.0.0.1:8080/article/getArticleByTitle/${title}`,
    {
      method: "POST",
    }
  );
  console.log("res", res);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return (await res.json()).content;
}

export default async function RemoteMdxPage({
  params: { title },
}: ArticleParams) {
  const mdx = await getData(title);
  return <MDXRemote source={mdx} />;
}

