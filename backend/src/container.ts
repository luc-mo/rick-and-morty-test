import { asClass, asValue, createContainer, InjectionMode } from 'awilix'
import axios from 'axios'
import * as graphQL from 'graphql'

import { config } from './infrastructure/config/env'
import { queries } from './infrastructure/config/queries'
import { AxiosHttpClient } from './infrastructure/services/axiosHttpClient'
import { GraphQLClient } from './infrastructure/services/graphQLClient'

import { CharacterTypes } from './infrastructure/graphql/types/character'
import { PaginationTypes } from './infrastructure/graphql/types/pagination'

import { FindCharacters } from './application/findCharacters'

import type { Dependencies } from './types/container'

const container = createContainer<Dependencies>({
	injectionMode: InjectionMode.PROXY,
})

container.register({
	// Libraries
	axios: asValue(axios),
	graphQL: asValue(graphQL),

	// Infrastructure
	config: asValue(config),
	queries: asValue(queries),
	httpClient: asClass(AxiosHttpClient),
	graphQLClient: asClass(GraphQLClient),

	// GraphQL types
	characterTypes: asClass(CharacterTypes),
	paginationTypes: asClass(PaginationTypes),

	// Application use cases
	findCharacters: asClass(FindCharacters),
})

export { container }
