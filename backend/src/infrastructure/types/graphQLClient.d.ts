import { Character } from './character'

export interface Pagination {
	count: number
	pages: number
	next: number | null
	prev: number | null
}

export interface GraphQLResponse<T> {
	data: T
}

export interface CharacterResponse {
	characters: {
		results: Character[]
		info: Pagination
	}
}
