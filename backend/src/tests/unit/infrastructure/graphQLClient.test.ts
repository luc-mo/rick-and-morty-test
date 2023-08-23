import { describe, test, expect, afterEach, beforeEach, vi } from 'vitest'
import { GraphQLClient } from '../../../infrastructure/services/graphQLClient'

describe('Instantiate rest helix client', () => {
	let restHelixClient: GraphQLClient
	const configMock = {
		rickAndMortyAPI: {
			graphQL: 'test',
		},
	}
	const queriesMock = {
		characterQuery: vi.fn(),
	}
	const httpClientMock = { get: vi.fn(), post: vi.fn() }

	beforeEach(() => {
		restHelixClient = new GraphQLClient({
			config: configMock,
			queries: queriesMock,
			// @ts-expect-error
			httpClient: httpClientMock,
		})
	})

	afterEach(() => {
		vi.resetAllMocks()
	})

	test('should be a function', () => {
		expect(typeof GraphQLClient).toBe('function')
	})

	test('should return an object with the expected methods', () => {
		expect(typeof restHelixClient).toBe('object')
		expect(typeof restHelixClient.find).toBe('function')
	})

	test('find method should return expected data', async () => {
		const query = 'test'
		const data = {
			characters: {
				results: [{ id: 1, name: 'test' }],
				info: { count: 1, pages: 1, prev: null, next: 2 },
			},
		}
		const expected = {
			characters: {
				results: [{ id: 1, name: 'test' }],
				info: { count: 1, pages: 1, prev: null, next: 2 },
			},
		}

		queriesMock.characterQuery.mockReturnValue(query)
		httpClientMock.post.mockResolvedValue({ data })
		expect(await restHelixClient.find(1, { name: 'test' })).toEqual(expected)
		expect(queriesMock.characterQuery).toHaveBeenCalledWith({ page: 1, filter: { name: 'test' } })
		expect(queriesMock.characterQuery).toHaveBeenCalledTimes(1)
		expect(httpClientMock.post).toHaveBeenCalledWith({
			url: configMock.rickAndMortyAPI.graphQL,
			body: { query },
		})
		expect(httpClientMock.post).toHaveBeenCalledTimes(1)
	})
})
