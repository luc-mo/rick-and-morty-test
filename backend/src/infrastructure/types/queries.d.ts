import { Character } from './character'

export type CharacterFilter = Partial<
	Pick<Character, 'name' | 'status' | 'species' | 'type' | 'gender'>
>

export interface CharacterQuery {
	page: number
	filter?: CharacterFilter
}
