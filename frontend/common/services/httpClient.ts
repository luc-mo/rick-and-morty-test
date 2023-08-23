import axios, { AxiosRequestConfig } from 'axios'

export module HttpClient {
	export interface Post {
		url: string
		body?: any
		options?: AxiosRequestConfig
	}

	export const post = async <T = any>({ url, body, options }: Post): Promise<T> => {
		const response = await axios.post<T>(url, body, options)
		return response.data
	}
}
