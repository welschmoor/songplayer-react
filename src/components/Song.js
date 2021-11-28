import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { IoPlayOutline, IoStarOutline, IoPlaySharp } from "react-icons/io5"
import { SongContext } from "../App"


const Song = ({ title, thumbnail, id, entireSongObj }) => {
   const { state, dispatch } = useContext(SongContext)
   const [currentSongPlaying, setCurrentSongPlaying] = useState(false)

   useEffect(() => {
      const isSongPlaying = state.isPlaying && id === state.song.id
      setCurrentSongPlaying(isSongPlaying)
   }, [state.song.id, id, state.isPlaying ]) //checking if ids match

   const playHandler = () => {
      dispatch({ type: "SET_SONG", payload: { song: entireSongObj } })
      dispatch(state.isPlaying? { type: "PAUSE_SONG" } : { type: "PLAY_SONG" } )
   }

   return (
      <SongDiv>
         <div style={{ display: "flex", alignItems: "center", gap: 20, }}>
            <IMG src={thumbnail ? thumbnail : "logo192.png"} alt="song cover" />
            <span>{title.slice(0, 15)}...</span>

         </div>
         <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginRight: 22, }}>
            {currentSongPlaying ? <IconPlayOn onClick={playHandler} /> : <IconPlayOff onClick={playHandler} />}
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
   height: 120px; 
   width: auto;
   object-fit:"cover"; 
`

const IconPlayOff = styled(IoPlayOutline)`
   font-size: 1.5rem;
   cursor: pointer;
`
const IconPlayOn = styled(IoPlaySharp)`
   font-size: 1.5rem;
   cursor: pointer;
`

const IconSave = styled(IoStarOutline)`
   font-size: 1.4rem;
   cursor: pointer;
`



export default Song
