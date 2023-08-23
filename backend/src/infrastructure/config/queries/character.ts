import { CharacterQuery } from '../../types/queries'

const query = `
  results {
    id
    name
    status
    species
    type
    gender
    image
    location {
      id
      name
      dimension
    }
  }
  info {
    count
    pages
    next
    prev
  }
`

const reduceFilters = (acc: string, [key, value]: [string, string]) => {
	return `${acc} ${key}: "${value}",`
}

export const characterQuery = ({ page, filter }: CharacterQuery) => {
	const filters = Object.entries(filter ?? {})
	if (filters.length === 0) {
		return `query {
      characters(page: ${page}) { ${query} }
    }`
	}

	const filterQuery = filters.reduce(reduceFilters, '')
	return `query {
    characters(page: ${page}, filter: { ${filterQuery} }) {
      ${query}
    }
  }`
}
