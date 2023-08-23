import { Dependencies } from '../../types/container'
import { CharacterFilter } from '../types/queries'
import { CharacterResponse, GraphQLResponse } from '../types/graphQLClient'

export class GraphQLClient {
	private readonly _config: Dependencies['config']
	private readonly _queries: Dependencies['queries']
	private readonly _httpClient: Dependencies['httpClient']

	constructor({
		config,
		queries,
		httpClient,
	}: Pick<Dependencies, 'config' | 'queries' | 'httpClient'>) {
		this._config = config
		this._queries = queries
		this._httpClient = httpClient
	}

	private async _createQuery<T = any>(query: string) {
		const url = this._config.rickAndMortyAPI.graphQL
		const { data } = await this._httpClient.post<GraphQLResponse<T>>({ url, body: { query } })
		return data
	}

	public async find(page: number, filter: CharacterFilter) {
		const query = this._queries.characterQuery({ page, filter })
		return await this._createQuery<CharacterResponse>(query)
	}
}
