import { CharacterFilter } from '../../infrastructure/types/queries'

export class FindCharactersCommand {
	public readonly page: number
	public readonly filter: CharacterFilter

	constructor(page: number, filter: CharacterFilter) {
		this.page = page
		this.filter = filter
	}
}
