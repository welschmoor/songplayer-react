
import styled from "styled-components"
import Song from "./Song"

const songData = [
   {title: "Boogie Boogie"},
   {title: "Moogie Schmoogie"},
   {title: "Cookie Googie"},
]

const SongList = () => {
   return(
      <ListDiv>
 

         {songData.map(e => {
            return (
               <Song title={e.title} />
            )
         })}

      </ListDiv>
   )
}







const ListDiv = styled.section`
margin-top: 10px;
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
  100% { transform: rotate(360deg); }
}
`

export default SongList