declare type ZhuimResponseType<T> = {
	message: string;
	code: number;
	data: T
}

declare type PaginationType = {
	limit: number;
	page: number;
}