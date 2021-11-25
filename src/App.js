/*
COLORS:
#574040;

*/

import styled from "styled-components"

import AddSong from "./components/AddSong"
import Header from "./components/Header"
import Player from "./components/Player"
import Queue from "./components/Queue"
import SongList from "./components/SongList"



function App() {
  return (
    <Maindiv>
      <Header />

      <Grid>
        <div>
          <AddSong />
          <SongList />
        </div>

        <div>
          <Player />
          <Queue />
        </div>

      </Grid>

    </Maindiv>
  );
}


const Maindiv = styled.div`
  background-color: #574040;
  height: 100vh;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    row-gap: 50px;
  }
`







export default App;