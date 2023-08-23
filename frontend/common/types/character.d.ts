export type Status = 'Dead' | 'Alive' | 'unknown'
export type Gender = 'unknown' | 'Female' | 'Male' | 'Genderless'

export interface Location {
	id: string
	name: string
	dimension: string
}

export interface CharacterEntity {
	id: string
	name: string
	status: Status
	species: string
	type: string
	gender: Gender
	image: string
	location: Location
}
