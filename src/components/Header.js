


import styled from "styled-components"
import { IoAlbumsSharp } from "react-icons/io5";
import AddSong from "./AddSong"


const Header = () => {
   return (
      <HeaderDiv>
         <Navbar>
            <Icon />
            <Heading>Play List</Heading>
            <AddSong />
         </Navbar>
      </HeaderDiv>
   )
}



const HeaderDiv = styled.header`
   display: flex;
   align-items: center;
   background-color: #574040;
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
   `

const Heading = styled.div`
   color: #c2dfc2;
   font-size: 1.4rem;
   text-shadow: 1px 1px 1px black;
   cursor: default;
`

const Icon = styled(IoAlbumsSharp)`
   font-size: 34px;
   color: #c2dfc2;
   transition: transform 1s;
   :hover {
      transform: rotate(360deg);
   }
`



export default Header