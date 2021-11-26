

import styled from "styled-components"
import { IoTrashOutline } from "react-icons/io5"


const QueuedSong = ({ title }) => {
   return (
      <QueueSDiv >
         <div style={{ display: "flex", alignItems:"center", gap: 20, }}>
            <IMGdiv>
               <IMG src="logo192.png" alt="song cover" />
            </IMGdiv>
            <Title>{title.slice(0, 16)}...</Title>

         </div>
         <IoTrashOutline />
      </QueueSDiv>
   )
}

const Title = styled.div`
   font-size: 1rem;
`

const QueueSDiv = styled.div`
   display: flex;
   gap: 8px;
   justify-content: space-between;
   align-items: center;
  
   width: 100%;
   height: 60px;
   cursor: default;
`

const IMGdiv = styled.div`
   border-radius: 50%;
   width: 50px;
   height: 50px;
   
`



const IMG = styled.img`
   width: 100%
`



export default QueuedSong