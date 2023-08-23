import { FindCharactersCommand } from '../../../application/findCharacters/findCharactersCommand'
import { container } from '../../../container'
import type { GraphQLSchema } from 'graphql'
import type { Dependencies } from '../../../types/container'
import type { CharacterResolveArgs } from '../../types/graphQLSchema'

export class CharacterSchema {
	private readonly _graphQL: Dependencies['graphQL']
	private readonly _characterTypes: Dependencies['characterTypes']
	private readonly _paginationTypes: Dependencies['paginationTypes']
	private readonly _characterSchema: GraphQLSchema

	constructor() {
		this._graphQL = container.resolve('graphQL')
		this._characterTypes = container.resolve('characterTypes')
		this._paginationTypes = container.resolve('paginationTypes')
		this._characterSchema = this._createCharactersSchema()
	}

	private _createCharactersSchema() {
		return new this._graphQL.GraphQLSchema({
			query: new this._graphQL.GraphQLObjectType({
				name: 'CharacterQuery',
				fields: this._createSchemaFields(),
			}),
		})
	}

	private _createSchemaFields() {
		return {
			characters: {
				type: this._createCharactersField(),
				args: {
					page: { type: this._graphQL.GraphQLInt },
					filter: { type: this._characterTypes.characterFilterType },
				},
				resolve: this._resolve.bind(this),
			},
		}
	}

	private async _resolve(_: any, args: CharacterResolveArgs) {
		try {
			const { page, filter } = args
			const command = new FindCharactersCommand(page, filter)
			const interactor = container.resolve('findCharacters')
			const response = await interactor.execute(command)
			return response
		} catch (error) {
			console.log(error)
		}
	}

	private _createCharactersField() {
		return new this._graphQL.GraphQLObjectType({
			name: 'Characters',
			fields: {
				results: {
					type: new this._graphQL.GraphQLList(this._characterTypes.characterType),
				},
				pagination: {
					type: this._paginationTypes.paginationType,
				},
			},
		})
	}

	get schema() {
		return this._characterSchema
	}
}
