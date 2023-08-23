import type { AxiosStatic } from 'axios'
import type graphQL from 'graphql'

import type { config } from '../infrastructure/config/env'
import type { queries } from '../infrastructure/config/queries'
import type { AxiosHttpClient } from '../infrastructure/services/axiosHttpClient'
import type { GraphQLClient } from '../infrastructure/services/graphQLClient'

import type { CharacterTypes } from '../infrastructure/graphql/types/character'
import type { PaginationTypes } from '../infrastructure/graphql/types/pagination'

import type { FindCharacters } from '../application/findCharacters'

export interface Dependencies {
	// Libraries
	axios: AxiosStatic
	graphQL: typeof graphQL

	// Infrastructure
	config: typeof config
	queries: typeof queries
	httpClient: AxiosHttpClient
	graphQLClient: GraphQLClient

	// GraphQL types
	characterTypes: CharacterTypes
	paginationTypes: PaginationTypes

	// Application use cases
	findCharacters: FindCharacters
}
