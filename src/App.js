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
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`







export default App;