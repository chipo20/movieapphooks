

import Modal from 'react-modal'
import React, { useState } from "react";
import Rating from "../Rating/Rating";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')



const AddMovie = ({AddFilm}) => {

    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [name , setName] = useState("")
    const [image , setImage] = useState("")
    const [rate , setRate] = useState("0")
    const HandleSubmite = (e) => {
    let   newmovie={
             name: name  ,
             url : image ,
             rate : rate ,
             id : Math.random()

      }
      AddFilm(newmovie, e)
      setName('')
      setImage('')
      setRate('0')

    }
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal(){
      setIsOpen(false);
    }
  
    return (
        <div>
          <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={_subtitle => (subtitle = _subtitle)}>Add your Movie</h2>
          
          
          <form>
            <div>
            <label>name :</label><input type="text" placeholder="add the name of movie "value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
            <label>image :</label><input type="text" placeholder="add the image of movie" value={image}onChange={(e)=>setImage(e.target.value)}/>
            </div>
            <div>
              <label>rate :</label> <Rating rate={rate} setRate={setRate}/>
              </div>
            <button onClick={HandleSubmite}>Submite</button> <button onClick={closeModal}>close</button>
            
          </form>
        </Modal>   
        </div>
    )
}

export default AddMovie






