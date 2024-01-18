declare type ArticleDto = {
	id: number;
	artist: string;
	title: string;
	abstract: string;
	content: string;
	pathname: string;
	layer: string;
	category: string;
	sidecategory: string;
	createdat: number;
}

declare type ArticleReviewDto = Exclude<ArticleDto, "id" | "artist">