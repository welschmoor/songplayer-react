/*
COLORS:
#574040;
hsl(0, 15.23%, 37.6%);

*/

import styled from "styled-components"

import AddSong from "./components/AddSong"
import Header from "./components/Header"
import Player from "./components/Player"
import Queue from "./components/Queue"
import SongList from "./components/SongList"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"



function App() {
  return (
    <Maindiv>
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
  );
}

/////////////////////////////////
// GLOBAL COLORS
export const globalBG = "hsl(0, 8.068965517241374%, 22.745098039215687%)"
export const globalLighterBG = "hsl(0, 15.23%, 37.6%)"

const Maindiv = styled.div`
  background-color: ${globalBG};
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