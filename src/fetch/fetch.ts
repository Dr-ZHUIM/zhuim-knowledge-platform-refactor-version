import axios from "axios";
type PostArguments = {
	url: string;
	data: any;
}

export function http_post<T>({ url, data }: PostArguments) {
	return axios.post<T>(url, data)
}