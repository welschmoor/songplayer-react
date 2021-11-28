import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';


export const client = new ApolloClient({
   uri: 'https://growing-honeybee-65.hasura.app/v1/graphql',
   cache: new InMemoryCache(),
   headers: {
      'x-hasura-admin-secret': "Rr3ojotT5cA40xZvMM5u818cA2ZQqH27X6GXUve4EjSBZSEWuoapxE7aT9SFKyRS"
   },
   options: { reconnect: true },
   typeDefs: gql`
      type Song {
         id: uuid!
         title: String!
         url: String!
         thumbnail: String!
         duration: String!
      }

      input SongInput {
         id: uuid!
         title: String!
         url: String!
         thumbnail: String!
         duration: String!
      }

      type Query {
         queue: [Song]!
      }

      type Mutation {
         addOrRemoveFromQueue(input: SongInput!): [Song]!
      }
   `
})

// const data = {
//    queue: []
//  }
// client.writeData( {data} )







// import { split } from 'apollo-link'
// import { HttpLink } from 'apollo-link-http'
// import { ApolloClient } from 'apollo-client'
// import { WebSocketLink } from 'apollo-link-ws'
// import { getMainDefinition } from 'apollo-utilities'
// import { InMemoryCache } from 'apollo-boost'


// const wsLink = new WebSocketLink({
//    uri: 'ws://growing-honeybee-65.hasura.app/v1/graphql',
//    options: { reconnect: true },
// })

// const httpLink = new HttpLink({
//    uri: 'http://growing-honeybee-65.hasura.app/v1/graphql',
// })

// const link = split(
//    ({ query }) => {
//       const definition = getMainDefinition(query)
//       return (
//          definition.kind === 'OperationDefinition' &&
//          definition.operation === 'subscription'
//       )
//    },
//    wsLink,
//    httpLink,
// )

// export default new ApolloClient({
//    cache: new InMemoryCache(),
//    link
// })

















// export const client = new ApolloClient({
//    link: new WebSocketLink({
//       uri: 'ws://growing-honeybee-65.hasura.app/v1/graphql',
//       options: {reconnect: true}
//    }),  

//    cache: new InMemoryCache(), 
//    headers: {
//       'x-hasura-admin-secret': "Rr3ojotT5cA40xZvMM5u818cA2ZQqH27X6GXUve4EjSBZSEWuoapxE7aT9SFKyRS"
//    },
// })


// export const client = () => {
//    return new ApolloClient({

//       link: new WebSocketLink({
//          uri: 'wss://growing-honeybee-65.hasura.app/v1/graphql',
//          options: {
//             reconnect: true,
//             connectionParams: {
//                headers: {
//                   'x-hasura-admin-secret': "Rr3ojotT5cA40xZvMM5u818cA2ZQqH27X6GXUve4EjSBZSEWuoapxE7aT9SFKyRS"
//                }
//             }
//          }
//       }),
//       cache: new InMemoryCache(),
//    });
// };



// export const client = new ApolloClient({
//    uri: 'https://growing-honeybee-65.hasura.app/v1/graphql',
//    cache: new InMemoryCache(),
//    headers: {
//       'x-hasura-admin-secret': "Rr3ojotT5cA40xZvMM5u818cA2ZQqH27X6GXUve4EjSBZSEWuoapxE7aT9SFKyRS"
//    },
//    options: { reconnect: true }
// })

// client.query({
//   query: gql`
//   query getSongs {
//   songs {
//     created_at
//     durationstr
//     id
//     thumbnail
//     title
//     url
//   }
// }`
// }).then(res => console.log(res.data.songs))

// import ApolloClient from "apollo-client"
// import { WebSocketLink } from "apollo-link-ws"
// import { InMemoryCache } from "apollo-cache-inmemory"
