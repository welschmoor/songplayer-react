
import { IoAddOutline } from "react-icons/io5";
import styled from "styled-components"


const AddSong = () => {
   return (
      <div>
         <Button>
            <Icon /> <Span>Add Song</Span>
         </Button>
      </div>
   )
}



const Button = styled.div`
   box-shadow: inset 0 0 0 0.5px rgba(255, 255, 255, 0.5), 0 0 5px 3px rgba(0, 0, 0, 0.1);
   border-radius: 9px;
   /* background-color: #8eb68e; */
   background: linear-gradient(180deg, #bbdfbb 0%, #8eb68e 100%);
   display: flex;
   align-items: center;
   padding: 6px 14px;
   width: 180px;
   font-weight: bold;
   font-size: 1rem;
   min-height: 50px;
   transition: transform 0.1s;

   * {
      transition: transform 0.2s;
   }
   :active {
      transform: scale(0.90);
   }
`


const Span = styled.div`
   ${Button}:hover & {
      transform: scale(0);
   }
`

const Icon = styled(IoAddOutline)`
   font-size: 34px;
   ${Button}:hover & {
      transform: translateX(52px);
      font-size: 55px;
      font-weight: 1000;
      position: absolute;
   }
`

export default AddSong