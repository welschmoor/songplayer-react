
import React from "react"
import styled from "styled-components"
import { IoStop,  IoPlayOutline, IoStarOutline, IoPlaySkipBackOutline, IoPlaySkipForwardOutline, IoPlaySharp } from "react-icons/io5"
import { SongContext } from "../App"

const Player = () => {
   const {state, dispatch}= React.useContext(SongContext)

   const playHandler = () => {
      dispatch(state.isPlaying? { type: "PAUSE_SONG" } : { type: "PLAY_SONG" } )
   }


   return (
      <PlayerGrid>
        

         <Controls>
            <div style={{ display: "flex", alignItems: "center", gap: 20, }}>
               <span>{state.song.title}</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, justifyContent: "space" }}>
               <div style={{ display: "flex", alignItems: "center", gap: 20, justifyContent: "space", margin: 6 }}>
                  <IconSkipBack />
                  {state.isPlaying? <IconStop onClick={playHandler} /> : <IconPlay onClick={playHandler} /> }
                  <IconSkipForw />
               </div>
               <Slider type="range" min={0} max={1} step={0.01} />
            </div>
         </Controls>
         <IMG src={state.song.thumbnail} alt="song cover" />


      </PlayerGrid>
   )
}


const PlayerGrid = styled.div`

   display: grid;
   grid-template-columns: 3fr 1fr;
   gap: 20px;
   justify-content: space-between;
   align-items: center;
         background-color: ${p => p.theme.cardCol};
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
  
   width: 100%;
   height: 250px;
   cursor: default;
   padding: 20px 0;
`


const IMG = styled.img`
   height: 140px; 
   width: auto;
   object-fit:"cover"; 
`

const IconPlay = styled(IoPlaySharp)`
   font-size: 1.5rem;
   cursor: pointer;
`
const IconStop = styled(IoStop)`
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