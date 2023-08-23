export const baseCharacterQuery = `
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
  pagination {
    count
    pages
    next
    prev
  }
`

export const characterQuery = (page: number, filter = '') => {
	return `query {
    characters(page: ${page}, filter: { ${filter} }) {
      ${baseCharacterQuery}
    }
  }`
}
