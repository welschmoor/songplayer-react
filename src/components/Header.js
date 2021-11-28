

import React, { useContext } from "react"
import { ThemeContext} from "../App"

import styled from "styled-components"
import { IoAlbumsSharp, IoSunny, IoMoon } from "react-icons/io5";
import AddSong from "./AddSong"


const Header = () => {
   const {themeMode, themeHandler} = useContext(ThemeContext)
   console.log("themeHandler: ", themeHandler)
   return (
      <HeaderDiv>
         <Navbar>
            <Icon />
            <Heading>Play List</Heading>
            <AddSong />
         </Navbar>
        
         {themeMode ?  <LightModeIcon onClick={themeHandler} /> : <DarkModeIcon onClick={themeHandler} /> }
        
      </HeaderDiv>
   )
}



const HeaderDiv = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-color: ${p => p.theme.navCol};
   height: 60px;
   box-shadow: 0px 0px 0px .5px rgba(0, 0, 0, 0.3);
   margin-bottom: 20px;
   z-index: 2;
`

const Navbar = styled.nav`
   display: flex;
   gap: 20px;
   align-items: center;
   margin-left: 10px;
   z-index: 2;
   width: 800px;
`

const Heading = styled.div`
   color: ${p => p.theme.iconCol};
   font-size: 1.4rem;
   text-shadow: 1px 1px 1px black;
   cursor: default;
   min-width: 120px;
`

const Icon = styled(IoAlbumsSharp)`
   font-size: 34px;
   color: ${p => p.theme.iconCol};
   transition: transform 1s;
   :hover {
      transform: rotate(360deg);
   }
`

const DarkModeIcon = styled(IoSunny)`
   font-size: 1.6rem;
   min-width: 1.6rem;
   margin-right: 20px;
   margin-left: 20px;
   cursor: pointer;
`

const LightModeIcon = styled(IoMoon)`
   font-size: 1.6rem;
   min-width: 1.6rem;
   margin-right: 20px;
   margin-left: 20px;
   cursor: pointer;
`

export default Header