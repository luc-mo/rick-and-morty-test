import type { GraphQLObjectType } from 'graphql'
import type { Dependencies } from '../../../types/container'

export class PaginationTypes {
	private readonly _graphQL: Dependencies['graphQL']
	private readonly _paginationType: GraphQLObjectType

	constructor({ graphQL }: Pick<Dependencies, 'graphQL'>) {
		this._graphQL = graphQL
		this._paginationType = new this._graphQL.GraphQLObjectType({
			name: 'Pagination',
			fields: {
				count: { type: this._graphQL.GraphQLInt },
				pages: { type: this._graphQL.GraphQLInt },
				next: { type: this._graphQL.GraphQLInt },
				prev: { type: this._graphQL.GraphQLInt },
			},
		})
	}

	get paginationType(): GraphQLObjectType {
		return this._paginationType
	}
}
