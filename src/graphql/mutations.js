import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';


export const ADD_SONG = gql`
   mutation addSong($title: String!, $thumbnail: String!, $duration: String!, $url: String!) {
      insert_songs(objects: {title: $title, thumbnail: $thumbnail, durationstr: $duration, url: $url}) {
      affected_rows
      }
   }
`


 