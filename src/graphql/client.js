import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://growing-honeybee-65.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': "Rr3ojotT5cA40xZvMM5u818cA2ZQqH27X6GXUve4EjSBZSEWuoapxE7aT9SFKyRS"
  }
})

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