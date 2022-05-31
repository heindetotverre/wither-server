import {} from 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import resolvers from './resolvers/index.mjs'
import typedefs from './schemas/index.mjs'

const app = express()
const port = process.env.DOKKU_PROXY_PORT || 4000
const url = process.env.MONGO_URL_SUFFIX || 'gql'
const host = process.env.HOSTNAME

app.use(cors())

app.use('/gql', graphqlHTTP({
  schema: typedefs,
  rootValue: resolvers,
  graphiql: true,
}))

app.listen(port)
console.log(`Running a GraphQL API server at http://${host}:${port}/${url}`)