import { MDXRemote } from "next-mdx-remote/rsc";

type ArticleParams = {
  params: {
    id: string;
  };
};

export async function getData(id: string) {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const res = await fetch(`http://127.0.0.1:8080/article/getArticle/${id}`, {
    method: "POST",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return (await res.json()).content;
}

export default async function RemoteMdxPage({ params: { id } }: ArticleParams) {
  const mdx = await getData(id);
  return <MDXRemote source={mdx} />;
}

