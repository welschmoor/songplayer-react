
import React, { useState, useRef } from "react"
import styled from "styled-components"
import { IoStop, IoPlayOutline, IoStarOutline, IoPlaySkipBackOutline, IoPlaySkipForwardOutline, IoPlaySharp } from "react-icons/io5"
import { SongContext } from "../App"
import { GET_QUEUED_SONGS } from "../graphql/queries"
import { useQuery } from "@apollo/client"

import ReactPlayer from "react-player"

const Player = () => {


   
   const [played, setPlayed] = React.useState(0);  // for the slider
   const [seeking, setSeeking] = React.useState(false)
   const { data } = useQuery(GET_QUEUED_SONGS)
   const { state, dispatch } = React.useContext(SongContext)

   const reactPlayerRef = React.useRef();

   const [playedSeconds, setPlayedSeconds] = useState(0)


   const playHandler = () => {
      dispatch(state.isPlaying ? { type: "PAUSE_SONG" } : { type: "PLAY_SONG" })
   }

   function sliderHandler(e) {
  
      setPlayed(e.target.value);
    }

    function mouseDownHandler() {
      setSeeking(true);
   }
   function mouseUpHandler() {
      setSeeking(false);
      reactPlayerRef.current.seekTo(played);
   }

   const FormatDuration = () => {
      const minutes = Math.floor(playedSeconds/60)
      const seconds = String(Math.floor(playedSeconds)%60)
      console.log(minutes, seconds)
      return (<div> {minutes}:{seconds.padStart(2, "0")} </div>)
   }

   return (
      <PlayerGrid>


         <Controls>
            <div style={{ display: "flex", alignItems: "center", gap: 20, }}>
               <span>{state.song.title.slice(0,24)}...</span>
            </div>
            <Timer >< FormatDuration /> </Timer>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, justifyContent: "space" }}>
               <div style={{ display: "flex", alignItems: "center", gap: 20, justifyContent: "space", margin: 6 }}>
                  <IconSkipBack />
                  {state.isPlaying ? <IconStop onClick={playHandler} /> : <IconPlay onClick={playHandler} />}
                  <IconSkipForw />
               </div>
               <Slider value={played} type="range" min={0} max={1} step={0.01} onChange={sliderHandler} onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler} />
            </div>
            <ReactPlayer
          ref={reactPlayerRef}
          onProgress={({ played, playedSeconds }) => {
            if (!seeking) {
              setPlayed(played);
              setPlayedSeconds(playedSeconds)
            }
          }}
          url={state.song.url}
          playing={state.isPlaying}
          hidden
        />
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

const Timer = styled.div`
   

`



export default Player