declare type ArticleDto = {
	title: string;
	abstract: string;
	content?: string;
	pathname: string;
	layer: string;
	category: string;
	cover?: string;
	createdat: number;
}

declare type ComponentDto = {
	id: number;
	function: string;
}

declare type ArticleReviewDto = Exclude<ArticleDto, "id" | "artist">