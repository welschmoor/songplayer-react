
import styled from "styled-components"
import QueuedSong from "./QueuedSong"

const songData = [
   { title: "Boogie Boogie" },
   { title: "Moogie Schmoogie" },
   { title: "Mookie Zoogie" },
   { title: "Lookie Boogie" },
   { title: "Cookie Noogie" },
   { title: "Sookie Voogie" },
]


const Queue = () => {
   return (
      <div style={{ marginTop: 10}}>
         <Heading >Playlist (7 Songs)</Heading>

         {songData.map(e => {
            return (
               <QueuedSong title={e.title} />
            )
         })}
      </div>
   )
}


const Heading = styled.h3`
   font-size: 1rem;
   margin-top: 40px;
   margin-bottom: 20px;
`









export default Queue