import { readdirSync, readFileSync } from "fs";
import { join, resolve } from "path";
import matter from "gray-matter";

const path = resolve("src/articles")

export function getArticles(filters: {
  layer?:string,
  category?:string
}):ArticleDto[]{
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
      pathname: `/ArticleList/${data.layer}/${data.category}/${filename}`.slice(0,-4),
    };
  }).filter((a) => {
    let tag = true;
    if (filters.layer) {
      tag = a.layer === filters.layer
    }
    if (filters.category){
      tag = a.category === filters.category
    }
    return tag
  })
}

export function getArticle(filename:string):ArticleDto{
    const fileContent = readFileSync(join(path, filename + '.mdx'),'utf8')
    const { data,content } = matter(fileContent);
    return {
      category: data.category,
			title: data.title,
			abstract: data.abstract,
      cover: data.cover,
			layer: data.layer,
			createdat: data.createdat,
      pathname: `/ArticleList/${data.layer}/${data.category}/${filename}`,
			content:content,
    };
}