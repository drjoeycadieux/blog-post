import { createYoga, createSchema } from 'graphql-yoga'
import { createServer } from 'node:http'

// 1. Define your data types (Schema)
const schema = createSchema({
  typeDefs: `
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'Hello from Yoga!',
    },
  },
})

// 2. THIS IS WHERE YOUR CODE GOES
const yoga = createYoga({
  schema,
  graphiql: {
    title: "My Blog Explorer",
  },
  cors: {
    origin: 'http://localhost:5173', // Allows your Vue app to talk to the server
    credentials: true
  }
})

// 3. Start the server
const server = createServer(yoga)
server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})