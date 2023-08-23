import { Dependencies } from '../../types/container'
import { Get, Post } from '../types/axiosHttpClient'

export class AxiosHttpClient {
	private readonly _axios: Dependencies['axios']

	constructor({ axios }: Pick<Dependencies, 'axios'>) {
		this._axios = axios
	}

	public async post<T>({ url, body, options }: Post) {
		const { data } = await this._axios.post<T>(url, body, options)
		return data
	}

	public async get<T>({ url, options }: Get) {
		const { data } = await this._axios.get<T>(url, options)
		return data
	}
}
