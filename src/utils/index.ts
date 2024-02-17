import { readdirSync, readFileSync } from "fs";
import { join, resolve } from "path";
import matter from "gray-matter";
import { mdxResolver } from "@/utils/mdxResolver";

const path = resolve("src/articles");
const componentsPath = resolve("src/articlesideComponents");

export function getArticles(filters: {
  layer?: string,
  category?: string
}): ArticleDto[] {
  return readdirSync(path).map((filename) => {
    const filePath = join(path, filename);
    const fileContent = readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    return {
      category: data.category,
      title: data.title,
      abstract: data.abstract,
      layer: data.layer,
      createdat: data.createdat,
      pathname: `/ArticleList/${data.layer}/${data.category}/${filename}`.slice(0, -4),
    };
  }).filter((a) => {
    let tag = true;
    if (filters.layer) {
      tag = a.layer === filters.layer
    }
    if (filters.category) {
      tag = a.category === filters.category
    }
    return tag
  })
}

export function getArticle(filename: string): XOR<ArticleDto, NotFoundType> {
  try {
    const fileContent = readFileSync(join(path, filename + '.mdx'), 'utf8')
    const { data, content } = matter(fileContent);
    return {
      category: data.category,
      title: data.title,
      abstract: data.abstract,
      cover: data.cover,
      layer: data.layer,
      createdat: data.createdat,
      pathname: `/ArticleList/${data.layer}/${data.category}/${filename}`,
      content: content
    };
  } catch (err) {
    return {
      notFound: true
    }
  }
}

export type ArticleResType = {
  code: string
  frontmatter: ArticleMetaData
}

export async function getArticle2(filename: string): Promise<XOR<ArticleResType, NotFoundType>> {
  let source = "";
  let key = `../articlesideComponents/${filename}/index.tsx`
  let files = {
    [key]: ""
  };
  try {
    // source = readFileSync(join(path, filename + '.mdx'), 'utf8')
    source = join(path, filename + '.mdx')
  } catch (err) {
    return {
      notFound: true
    }
  }
  try {
    files[key] =  readFileSync(join(componentsPath, filename, 'index.tsx'), 'utf8')
  } catch (err) {
    console.log(filename,":","no components")
  }
  const { code, frontmatter } = await mdxResolver(source,files)
  return {
    code,
    frontmatter,
  } as ArticleResType
}