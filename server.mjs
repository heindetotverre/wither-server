import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import resolvers from './resolvers/index.mjs'
import typedefs from './schemas/index.mjs'

const app = express()

app.use(cors())

app.use('/gql', graphqlHTTP({
  schema: typedefs,
  rootValue: resolvers,
  graphiql: true,
}))

app.listen(4000)
console.log('Running a GraphQL API server at http://localhost:4000/gql')