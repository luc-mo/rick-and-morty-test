import { HttpClient } from './httpClient'
import { characterQuery } from '../queries/character'
import { reduceFilters } from '../utils/reduceFilters'
import type { CharacterQuery } from '../types/queries'
import type { CharacterResponse } from '../types/graphQLClient'

export module GraphQLClient {
	const HUMAN_SPECIES = 'Human'
	const url = process.env.NEXT_PUBLIC_BASE_GRAPHQL_URL!

	export const getCharacters = async ({ page, filter = {} }: CharacterQuery) => {
		const filters = Object.entries(filter)
		const filtersQuery = filters.reduce(reduceFilters, '')
		const query = characterQuery(page, filtersQuery)
		return await HttpClient.post<{ data: CharacterResponse }>({ url, body: { query } })
	}

	export const getAllSpecies = async (page: number) => {
		const species = await getCharacters({ page })
		return species.data
	}

	export const getHumans = async (page: number) => {
		const humans = await getCharacters({ page, filter: { species: HUMAN_SPECIES } })
		return humans.data
	}
}
