import { Dependencies } from '../../types/container'
import { FindCharactersCommand } from './findCharactersCommand'
import { FindCharactersResponse } from './findCharactersResponse'

export class FindCharacters {
	private readonly _graphQLClient: Dependencies['graphQLClient']

	constructor({ graphQLClient }: Pick<Dependencies, 'graphQLClient'>) {
		this._graphQLClient = graphQLClient
	}

	async execute({ page, filter }: FindCharactersCommand) {
		const { characters } = await this._graphQLClient.find(page, filter)
		return new FindCharactersResponse(characters.results, characters.info)
	}
}
