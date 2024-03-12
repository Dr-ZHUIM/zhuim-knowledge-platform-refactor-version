import { readdirSync, readFileSync } from "fs";
import { join, resolve } from "path";
import matter from "gray-matter";
import { mdxResolver } from "@/utils/mdxResolver";
import { ArticleReview } from "./objectMutation";

const path = resolve("src/articles");

export function getArticles(filters: {
  layer: string,
  category?: string
}) {
  const layerPath = join(path, filters.layer);
  let result: ArticleDto[] = [];
  try{
    readdirSync(layerPath).forEach((foldername) => {
      const filePath = join(layerPath, foldername, "page.mdx");
      try {
        const fileContent = readFileSync(filePath, 'utf8');
        const { data: metaData } = matter(fileContent);
        const data = { ...metaData, pathname: `/ArticleList/${metaData.layer}/${metaData.category}/${foldername}` } as ArticleDto
        result.push(new ArticleReview({ ...data }))
      } catch (err) {
        return;
      }
    })
  }catch(err){
    return result;
  }
  if (filters.category) {
    result = result.filter((a) => a.category === filters.category)
    console.log('result',result)
  }
  return result;
}

export type ArticleResType = {
  code: string
  frontmatter: ArticleMetaData
}

type ArticleSource = {
  foldername:string;
  layer:string;
} 

export async function getArticle({foldername, layer}: ArticleSource): Promise<XOR<ArticleResType, NotFoundType>> {
  const _path = join(path,layer, foldername);
  let source = "";
  let key = `./components.tsx`
  let files = {
    [key]: ""
  };
  try {
    source = join(_path, 'page.mdx')
  } catch (err) {
    return {
      notFound: true
    }
  }
  try {
    files[key] = readFileSync(join(_path, 'components.tsx'), 'utf8')
  } catch (err) {
    files[key] = "";``
  }
  const { code, frontmatter } = await mdxResolver(source, files)
  return {
    code,
    frontmatter,
  } as ArticleResType
}