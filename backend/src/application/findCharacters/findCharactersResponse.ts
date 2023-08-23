import { Character } from '../../infrastructure/types/character'
import { Pagination } from '../../infrastructure/types/graphQLClient'

export class FindCharactersResponse {
	public readonly results: Character[]
	public readonly pagination: Pagination

	constructor(characters: Character[], pagination: Pagination) {
		this.results = characters
		this.pagination = pagination
	}
}
