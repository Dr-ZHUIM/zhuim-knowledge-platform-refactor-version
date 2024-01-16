import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import remarkToc from "remark-toc"
import remarkEmoji from 'remark-emoji';

import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';

import createMDX from '@next/mdx'

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [        
			remarkMath,
			remarkGfm,
			remarkEmoji,
			() => remarkToc({ heading: '(table[ -]of[ -])?contents?|toc|目录' }),],
    rehypePlugins: [
			rehypeHighlight, rehypeKatex
		],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

export default withMDX(nextConfig)