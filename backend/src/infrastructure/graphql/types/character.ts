import type { GraphQLEnumType, GraphQLObjectType, GraphQLInputObjectType } from 'graphql'
import type { Dependencies } from '../../../types/container'

export class CharacterTypes {
	private readonly _graphQL: Dependencies['graphQL']
	private readonly _statusEnum: GraphQLEnumType
	private readonly _genderEnum: GraphQLEnumType
	private readonly _locationType: GraphQLObjectType
	private readonly _characterType: GraphQLObjectType
	private readonly _characterFilterType: GraphQLInputObjectType

	constructor({ graphQL }: Pick<Dependencies, 'graphQL'>) {
		this._graphQL = graphQL
		this._statusEnum = new this._graphQL.GraphQLEnumType({
			name: 'Status',
			values: {
				Dead: { value: 'Dead' },
				Alive: { value: 'Alive' },
				unknown: { value: 'unknown' },
			},
		})
		this._genderEnum = new this._graphQL.GraphQLEnumType({
			name: 'Gender',
			values: {
				unknown: { value: 'unknown' },
				Female: { value: 'Female' },
				Male: { value: 'Male' },
				Genderless: { value: 'Genderless' },
			},
		})

		this._locationType = new this._graphQL.GraphQLObjectType({
			name: 'Location',
			fields: {
				id: { type: this._graphQL.GraphQLID },
				name: { type: this._graphQL.GraphQLString },
				dimension: { type: this._graphQL.GraphQLString },
			},
		})

		this._characterType = new this._graphQL.GraphQLObjectType({
			name: 'Character',
			fields: {
				id: { type: this._graphQL.GraphQLID },
				name: { type: this._graphQL.GraphQLString },
				status: { type: this._statusEnum },
				species: { type: this._graphQL.GraphQLString },
				type: { type: this._graphQL.GraphQLString },
				gender: { type: this._genderEnum },
				image: { type: this._graphQL.GraphQLString },
				location: { type: this._locationType },
			},
		})

		this._characterFilterType = new this._graphQL.GraphQLInputObjectType({
			name: 'CharacterFilter',
			fields: {
				name: { type: this._graphQL.GraphQLString },
				status: { type: this._statusEnum },
				species: { type: this._graphQL.GraphQLString },
				type: { type: this._graphQL.GraphQLString },
				gender: { type: this._genderEnum },
			},
		})
	}

	get characterType(): GraphQLObjectType {
		return this._characterType
	}

	get characterFilterType(): GraphQLInputObjectType {
		return this._characterFilterType
	}
}
