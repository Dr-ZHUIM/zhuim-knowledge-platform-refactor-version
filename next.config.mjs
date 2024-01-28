import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import remarkEmoji from 'remark-emoji';

import rehypeHighlight from 'rehype-highlight';
import rehypeMathjax from 'rehype-mathjax';

import createMDX from '@next/mdx'

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [        
			remarkMath,
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
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	images: {
		remotePatterns:[
			{
				protocol: "https",
				hostname: "images.unsplash.com",
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
		]
	}
}

export default withMDX(nextConfig)