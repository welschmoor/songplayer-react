

import { IoHome, IoHeart, IoHeadsetSharp, IoHelpCircleOutline, IoVolumeMute } from "react-icons/io5"
import styled from "styled-components"

const Sidebar = () => {
   return(
      <SidebarDiv>
         <SideBarFiller />
         <IoHome style={iconStyle} />
         <IoHeart style={iconStyle}/>
         <IoHeadsetSharp style={iconStyle}/>
         <IoVolumeMute style={iconStyle}/>
         <IoHelpCircleOutline style={iconStyle}/>
      </SidebarDiv>
   )
}

export default Sidebar

const iconStyle = { cursor: "pointer"}

const SidebarDiv = styled.aside`
 
   background-color: ${p => p.theme.navCol};
   display: flex;
   gap: 26px;
   flex-direction: column;
   align-items: center;
   padding: 10px 0;
   /* transform: translateY(-20px); */
   height: 100%;
   position: relative;
`

const SideBarFiller = styled.div`
      background-color: ${p => p.theme.navCol};
      position: absolute;
      padding: 12px 25px;
      transform: translateY(-30px);
`