
import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';




export const GET_QUEUED_SONGS = gql`
   query getQueuedSongs {
      queue {
         id
         duration
         title
         thumbnail
         url
      }
   }
`







export const GET_SONGS = gql`
   query getSongs {
      songs(order_by: {created_at: desc}) {
      created_at
      durationstr
      id
      thumbnail
      title
      url
      }
   }`
 