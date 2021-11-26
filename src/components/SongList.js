
import { useQuery } from "@apollo/client"
import styled from "styled-components"
import { GET_SONGS } from "../graphql/queries"
import Song from "./Song"

// const songData = [
//    {title: "Boogie Boogie"},
//    {title: "Moogie Schmoogie"},
//    {title: "Mookie Zoogie"},
//    {title: "Lookie Boogie"},
//    {title: "Cookie Noogie"},
//    {title: "Sookie Voogie"},
// ]

const SongList = () => {
   const {data, loading, error } = useQuery(GET_SONGS)
   console.log("<><><><>data: ", data)

   if (loading) {
      return <ListDiv><Spinner /></ListDiv>
   }
   if (error) return  <ListDiv>Error getting songs...</ListDiv>
   return(
      <ListDiv>
 
         {data.songs.map(e => {
            return (
               <Song title={e.title} key={e.id} thumbnail={e.thumbnail} />
            )
         })}

      </ListDiv>
   )
}







const ListDiv = styled.section`

   position: relative;
   display: flex;
   flex-direction: column;
   gap: 10px;
`

const Spinner = styled.div`
margin-top: 20px;
  position: absolute;
   top: 50%;
   left: 50%;

  border: 4px solid hsl(120, 11%, 72%); /* Light grey */
  border-top: 4px solid hsl(0, 15.23%, 57.6%); /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(720deg); }
}
`

export default SongList