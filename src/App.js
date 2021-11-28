/*
COLORS:
#574040                   sidebar, navbar have this color
hsl(0, 15.23%, 37.6%)     
hsl(0, 15.23%, 37.6%)"   card color
*/

import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

import React, { useState } from "react"
import AddSong from "./components/AddSong"
import Header from "./components/Header"
import Player from "./components/Player"
import Queue from "./components/Queue"
import SongList from "./components/SongList"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"





//////////////////////////////////////////////////////////////
//    THEMES
//////////////////////////////////////////////////////////////

const GlobalStyle = createGlobalStyle`
  html, body {
    font-size: 125%;
    font-family: Arial, Helvetica, sans-serif;
    color: ${p => p.theme.iconCol};
    text-shadow: 1px 1px 1px black;
    background-color: ${p => p.theme.navCol};
  }
`;

const lightTheme = {
  navCol: "#e9e9e9",
  bgCol: "#e2d8d8",
  cardCol: "#e9e9e9",
  iconCol: "hsl(120, 31.182795698924735%, 14.76470588235294%);",
}
const darkTheme = {
  navCol: "#574040",
  bgCol: "hsl(0, 8.068965517241374%, 22.745098039215687%)",
  cardCol: "hsl(0, 15.183246073298434%, 37.450980392156865%)",
  iconCol: "#c2dfc2;",
}






//////////////////////////////////////////////////////////////
//    REDUCER
//////////////////////////////////////////////////////////////

export const SongContext = React.createContext({
  song: {
    id: "a83b63bf-c4a7-4c7a-8194-bfc36107bb05",
    title: "Alice",
    thumbnail: "https://i.ytimg.com/vi/wFgAE5SgFnw/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=wFgAE5SgFnw",
    durationstr: "151",
  },
  isPlaying: false,
})

export const ThemeContext = React.createContext()

const songReducer = (state, action) => {
  switch(action.type) {
    case ("PLAY_SONG"): {
      return { ...state, isPlaying: true }
    }
    case ("PAUSE_SONG"): {
      return { ...state, isPlaying: false }
    }
    case ("SET_SONG"): {
      return { ...state, song: action.payload.song }
    }
    default: return state;
  }
}


function App() {
  const initialSongState = React.useContext(SongContext)
  const [state, dispatch] = React.useReducer(songReducer, initialSongState)

  const [themeMode, setThemeMode] = useState(false)

  const themeHandler = () => {
    setThemeMode(p => !p)
    console.log(themeMode)
    return "pop"
  }

  return (
    <SongContext.Provider value={{state, dispatch}} >
      <ThemeContext.Provider value={{ themeMode, themeHandler }} >
        <ThemeProvider theme={themeMode ? lightTheme : darkTheme}>


          <Maindiv>
            <GlobalStyle />
            <Header />

            <Grid>
              <SideBarMini >
                <Sidebar />
              </SideBarMini>


              <SecondCol>
                <Player />
                <Queue />
              </SecondCol>


              <FirstCol>
                <SongList />
              </FirstCol>

            </Grid>

            <Footer />
          </Maindiv>
        </ThemeProvider>
      </ThemeContext.Provider>
    </SongContext.Provider>
  );
}

/////////////////////////////////
// GLOBAL COLORS
export const globalBG = "hsl(0, 8.068965517241374%, 22.745098039215687%)"
export const globalLighterBG = "hsl(0, 15.23%, 37.6%)"

const Maindiv = styled.div`
  background-color: ${p => p.theme.bgCol};
  width: 100%;
  height: 100%;
`

const Grid = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 50px 1fr 1fr;
  align-items: start;
  column-gap: 20px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    row-gap: 50px;
  }
`

const SecondCol = styled.div`

  @media screen and (max-width: 800px) {
   
      row-gap: 50px;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
  }
`
const FirstCol = styled.div`
    @media screen and (max-width: 800px) {
      display: none;
}
`

const SideBarMini = styled.div`
    
  height: 100%;
  @media screen and (max-width: 800px) {
    display: none;
  }
`





export default App;