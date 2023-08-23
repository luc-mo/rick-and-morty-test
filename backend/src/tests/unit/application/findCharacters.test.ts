import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest'
import { FindCharacters } from '../../../application/findCharacters'

describe('Find characters', () => {
	let findCharactersMock: FindCharacters

	const graphQLClientMock = {
		find: vi.fn(),
	}

	beforeEach(() => {
		// @ts-expect-error
		findCharactersMock = new FindCharacters({ graphQLClient: graphQLClientMock })
	})

	afterEach(() => {
		vi.resetAllMocks()
	})

	test('should be a function', () => {
		expect(typeof FindCharacters).toBe('function')
	})

	test('should find all characters', async () => {
		const page = 1
		const filter = { name: 'Rick' }
		const data = {
			characters: {
				results: [{ id: 1, name: 'Rick' }],
				info: { count: 1, pages: 1, prev: null, next: 2 },
			},
		}
		const expected = {
			characters: {
				results: [{ id: 1, name: 'Rick' }],
				pagination: { count: 1, pages: 1, prev: null, next: 2 },
			},
		}

		graphQLClientMock.find.mockResolvedValue(data)
		expect(await findCharactersMock.execute({ page, filter })).toEqual(expected.characters)
		expect(graphQLClientMock.find).toHaveBeenCalledWith(page, filter)
		expect(graphQLClientMock.find).toHaveBeenCalledTimes(1)
	})
})
