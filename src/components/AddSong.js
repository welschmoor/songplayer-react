
import { useState } from "react"
import { IoAddOutline } from "react-icons/io5";
import styled from "styled-components"


const AddSong = () => {
   const [onChangeSt, setOnChangeSt] = useState('')

   const submitHandler = e => {
      e.preventDefault()
      console.log(e) // nothing appears in console
   }

   const changeHandler = e => {
      setOnChangeSt(e.target.value)
      console.log(e.target.value)
   }

   return (
      <div>
         <Form onSubmit={()=> submitHandler()} >
            <Input placeholder="Paste YouTube URL here" required name="input" onChange={changeHandler} />
            <Button type="submit" onClick={submitHandler} >
               <Icon /> <Span>Add Song</Span>
            </Button>
         </Form>
      </div>
   )
}


const Form = styled.form`
   display: flex;
   align-items: center;
   min-height: 58px;
`


const Button = styled.div`
   box-shadow: inset 0 0 0 0.5px rgba(255, 255, 255, 0.5), 0 0 5px 3px rgba(0, 0, 0, 0.1);
   color: #574040;
   text-shadow: none;
   /* background-color: #8eb68e; */
   background: linear-gradient(180deg, #bbdfbb 0%, #8eb68e 100%);
   display: flex;
   align-items: center;
   padding: 6px 18px;
   width: 180px;
   min-width: 180px;
   font-weight: bold;
   font-size: 1rem;
   min-height: 49px;
   height: 49px;
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



const Input = styled.input`
   border: none;
   box-shadow: 0px 0px 0px .5px rgba(0, 0, 0, 0.3);

   width: 100%;
   min-height: 50px;
   font-size: 1rem;
   background-color: hsl(0, 15.23%, 37.6%);

   color: hsl(120, 11%, 72%);
  text-shadow: 1px 1px 1px black;
  padding-left: 13px;


   :focus {
      outline: none;
      box-shadow: inset 0px 0px 0px 5px rgba(0, 0, 0, 0.4);

   }
`









const Icon = styled(IoAddOutline)`
   font-size: 34px;
   color: #574040;
   ${Button}:hover & {
      transform: translateX(50px);
      font-size: 55px;
      font-weight: 1000;
      position: absolute;
   }
`

export default AddSong