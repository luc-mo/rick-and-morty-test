import { graphqlHTTP } from 'express-graphql'
import { CharacterSchema } from '../schema/character'

const { schema } = new CharacterSchema()

export const graphQLMiddleware = graphqlHTTP({
	schema,
	graphiql: true,
})
