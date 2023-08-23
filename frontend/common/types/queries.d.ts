import { CharacterEntity } from './character'

export type CharacterFilter = Partial<
	Pick<CharacterEntity, 'name' | 'status' | 'species' | 'type' | 'gender'>
>

export interface CharacterQuery {
	page: number
	filter?: CharacterFilter
}
