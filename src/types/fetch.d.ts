declare type ZhuimResponseType<T> = {
	message: string;
	code: number;
	data: T
}