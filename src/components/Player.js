
import styled from "styled-components"
import { IoPlayOutline, IoStarOutline, IoPlaySkipBackOutline, IoPlaySkipForwardOutline } from "react-icons/io5"


const Player = ({ }) => {
   return (
      <PlayerGrid>


         <Controls>
            <div style={{ display: "flex", alignItems: "center", gap: 20, }}>
               <span>Song Title Here</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, justifyContent: "space" }}>
               <div style={{ display: "flex", alignItems: "center", gap: 20, justifyContent: "space" }}>
                  <IconSkipBack />
                  <IconPlay />
                  <IconSkipForw />
               </div>
               <Slider type="range" min={0} max={1} step={0.01} />
            </div>
         </Controls>
         <IMG src="logo192.png" alt="song cover" />


      </PlayerGrid>
   )
}


const PlayerGrid = styled.div`

   display: grid;
   grid-template-columns: 3fr 1fr;
   gap: 20px;
   justify-content: space-between;
   align-items: center;
   background-color: hsl(0, 15.23%, 37.6%);
   width: 100%;
   height: 250px;
   cursor: default;
`

const Slider = styled.input`
   width: 90%;
   flex-grow: 1;

`


const Controls = styled.div`
   display: flex;
   flex-direction: column;
   gap: 8px;
   justify-content: space-between;
   margin-left: 20px;
   background-color: hsl(0, 15.23%, 37.6%);
   width: 100%;
   height: 250px;
   cursor: default;
   padding: 20px 0;
`


const IMG = styled.img`
   height: 100px; 
   width: 100px;
   object-fit:"cover"; 
`

const IconPlay = styled(IoPlayOutline)`
   font-size: 1.5rem;
   cursor: pointer;
`
const IconSkipBack = styled(IoPlaySkipBackOutline)`
   font-size: 1.4rem;
   cursor: pointer;
`
const IconSkipForw = styled(IoPlaySkipForwardOutline)`
   font-size: 1.4rem;
   cursor: pointer;
`





export default Player