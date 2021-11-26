
import { useState } from "react"
import { IoAddOutline } from "react-icons/io5";
import styled from "styled-components"


const AddSong = () => {
   const [onChangeSt, setOnChangeSt] = useState('')
   const [showModal, setShowModal] = useState(false)
   const [img, setImg] = useState('')

   const submitHandler = e => {
      e.preventDefault()
      console.log(e) // nothing appears in console
      setShowModal(true)
   }

   const changeHandler = e => {
      setOnChangeSt(e.target.value)
      console.log(e.target.value)
   }

   const modalSubmit = e => {
      e.preventDefault()
      console.log(e)
      setTimeout(() => {
         setShowModal(false)
      }, 160);

   }

   return (
      <>
         {showModal && <ModalPlane onClick={() => setShowModal(false)} />}
         {showModal &&

            <Modal onSubmit={modalSubmit} >
               {img ? <img src={URL.createObjectURL(img)} alt="album cover" style={{ height: 200, width: "100%", objectFit: "cover" }} /> : null}
               <Input placeholder="Enter Song Name" />
               <Label >
                  <FileInput laceholder="Enter Song Name" type="file" className="fileinput" onChange={e => setImg(e.target.files[0])} />
                  Click Here to Upload Image
               </Label>
               <ButtonM onClick={modalSubmit}>Add Song</ButtonM>

            </Modal>
         }
         <div>
            <Form onSubmit={submitHandler} >
               <Input placeholder="Paste YouTube URL here" required name="input" onChange={changeHandler} />
               <Button type="submit"  >
                  <Icon /> <Span>Add Song</Span>
               </Button>
            </Form>
         </div>
      </>
   )
}



//////////////////////////////////////////////////
//  MODAL
const Modal = styled.form`
   position: absolute;
   left: 50%;
   top: 50%;
   width: 60%;
   transform: translate(-50%, -50%);
   box-shadow: 0px 0px 0px .5px rgba(0, 0, 0, 0.3), 0 0 14px 3px rgba(0, 0, 0, 0.2);
   z-index: 10;
   background-color: #574040;
`

const ModalPlane = styled.div`
   position: absolute;
   background-color: rgba(46, 46, 46, 0.5);
   left: 50%;
   top: 50%;
   width: 100%;
   height: 100%;
   transform: translate(-50%, -50%);
   backdrop-filter: blur(2px);
   -webkit-backdrop-filter: blur(2px);
   z-index: 1;
`

const Label = styled.label`
   cursor: pointer;
   display: flex;
   align-items: center;
   border: none;
   box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.3);

   width: 100%;
   min-height: 50px;
   font-size: 1rem;
   background-color: hsl(0, 15.23%, 37.6%);
   font-size: 0.8rem;
 
   color: hsl(120, 11%, 72%);
   text-shadow: 1px 1px 1px black;
   padding-left: 18px;


   :focus {
      outline: none;
      box-shadow: inset 0px 0px 0px 5px rgba(0, 0, 0, 0.4);
   }

  
`


const ButtonM = styled.button`
   border: none;
   cursor: pointer;
   box-shadow: inset 0 0 0 0.5px rgba(255, 255, 255, 0.5), 0 0 5px 3px rgba(0, 0, 0, 0.1);
   color: #574040;
   text-shadow: none;
   /* background-color: #8eb68e; */
   background: linear-gradient(180deg, #bbdfbb 0%, #8eb68e 100%);
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 6px 18px;
   width: 180px;
   min-width: 180px;
   font-weight: bold;
   font-size: 1rem;
   min-height: 49px;
   height: 49px;
   transition: transform 0.1s;
   width: 100%;
 

   * {
      transition: transform 0.2s;
   }
   :active {
      transform: scale(0.90);
   }
`








//////////////////////////////////////////////////
//  FORM
const Form = styled.form`
   display: flex;
   align-items: center;
   min-height: 58px;
`

const Button = styled.button`
   border: none;
   cursor: pointer;
   box-shadow: inset 0 0 0 0.5px rgba(255, 255, 255, 0.5), 0 0 5px 3px rgba(0, 0, 0, 0.1);
   color: #574040;
   text-shadow: none;
   /* background-color: #8eb68e; */
   background: linear-gradient(180deg, #bbdfbb 0%, #8eb68e 100%);
   display: flex;
   align-items: center;
   padding: 6px 16px;
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
   min-width: 220px;
   font-size: 1rem;
   background-color: hsl(0, 15.23%, 37.6%);

   color: hsl(120, 11%, 72%);
   text-shadow: 1px 1px 1px black;
   padding-left: 18px;


   :focus {
      outline: none;
      box-shadow: inset 0px 0px 0px 5px rgba(0, 0, 0, 0.4);
   }

   [type="file"] {
    display: none;
}


`



const FileInput = styled.input`
   display: none;
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