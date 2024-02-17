import {bundleMDX} from 'mdx-bundler'

import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkEmoji from "remark-emoji";

import rehypeHighlight from "rehype-highlight";
import rehypeMathjax from "rehype-mathjax";

export async function mdxResolver(file:string,files:Record<string,string>){
	const {code, frontmatter} = await bundleMDX({
		file,files,mdxOptions(options) {
			options.remarkPlugins = [...(options.remarkPlugins ?? []),remarkEmoji as any, remarkMath, remarkGfm];
			options.rehypePlugins = [...(options.rehypePlugins ?? []),rehypeHighlight as any, rehypeMathjax];
			return options
		}
	})
	return {
		code,
		frontmatter,
	}
}