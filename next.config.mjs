import remarkGfm from "remark-gfm"
import remarkEmoji from 'remark-emoji';

import rehypeHighlight from 'rehype-highlight';
import rehypeMathjax from 'rehype-mathjax';

import createMDX from '@next/mdx'

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [        
			remarkGfm,
			remarkEmoji,
		],
    rehypePlugins: [
			rehypeHighlight, rehypeMathjax
		],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	cacheMaxMemorySize: 0,
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	images: {
		remotePatterns:[
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
			},
			{
				protocol: "https",
				hostname: "github.com",
				port: "",
			},			
			{
				protocol: "https",
				hostname: "raw.githubusercontent.com",
				port: "",
			}
		]
	},
	async rewrites(){
		return  [
			{
				source: '/api/:path*',
				destination: 'http://127.0.0.1:8080/:path*',
			},
			{
				source: '/papi/:path*',
				destination: 'https://pokemon.fantasticmao.cn/pokemon/:path*',
			}
		]
	}
}

export default withMDX(nextConfig)