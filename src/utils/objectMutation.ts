export class ArticleReview{
	title:string
	category:string
	abstract:string
	layer:string
	createdat:number
	pathname:string
	cover?: string
	constructor(data:ArticleDto){
		this.title = data.title
		this.category = data.category
		this.abstract = data.abstract
		this.layer = data.layer
		this.createdat = data.createdat
		this.pathname = data.pathname
		this.cover = data.cover
	}
}
