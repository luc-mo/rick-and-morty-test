import { CharacterEntity } from './character'

export interface Pagination {
	count: number
	pages: number
	next: number | null
	prev: number | null
}

export interface GraphQLResponse<T> {
	data: T
}

export interface Characters {
	results: CharacterEntity[]
	pagination: Pagination
}

export interface CharacterResponse {
	characters: Characters
}
