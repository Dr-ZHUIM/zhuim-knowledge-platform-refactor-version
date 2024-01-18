import { MDXRemote } from "next-mdx-remote/rsc";
import BreadCrumbs from "../../../../components/BreadCrumbs/index";

type ArticleParams = {
  params: {
    title: string;
    category: string;
  };
};

export async function getData(title: string): Promise<ArticleDto> {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const res = await fetch(
    `http://127.0.0.1:8080/article/getArticleByTitle/${title}`,
    {
      method: "POST",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return (await res.json()) as ArticleDto;
}

export default async function RemoteMdxPage({
  params: { title },
}: ArticleParams) {
  const { content } = await getData(title);
  return (
    <>
      <h2>{title}</h2>
      <MDXRemote source={content} />
    </>
  );
}

