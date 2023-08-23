export const reduceFilters = (acc: string, [key, value]: [string, string]) => {
	return `${acc} ${key}: "${value}",`
}
