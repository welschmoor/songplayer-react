
import styled from "styled-components"
import { IoPlayOutline, IoStarOutline } from "react-icons/io5"


const Song = ({ title, thumbnail }) => {
   return (
      <SongDiv>
         <div style={{ display: "flex", alignItems: "center", gap: 20, }}>
            <IMG src={thumbnail ? thumbnail : "logo192.png"} alt="song cover" />
            <span>{title.slice(0, 15)}...</span>

         </div>
         <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginRight: 22, }}>
            <Icon />
            <IconSave />
         </div>
      </SongDiv>
   )
}



const SongDiv = styled.div`
   display: flex;
   gap: 8px;
   justify-content: space-between;
   align-items: center;
   background-color: ${p => p.theme.cardCol};
   width: 100%;
   height: 120px;
   cursor: default;
`

const IMG = styled.img`
   height: 100px; 
   width: 100px;
   object-fit:"cover"; 
`

const Icon = styled(IoPlayOutline)`
   font-size: 1.5rem;
   cursor: pointer;
`

const IconSave = styled(IoStarOutline)`
   font-size: 1.4rem;
   cursor: pointer;
`



export default Song
