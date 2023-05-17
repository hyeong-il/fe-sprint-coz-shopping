import React, {useRef} from 'react';
import { createPortal } from 'react-dom';
import { HiStar, HiX} from "react-icons/hi";


const Modal = ({onClose, imageUrl, title}) => {
  const el = document.getElementById("modal");
  const outSection = useRef();
  const stophandler = (e) => {
    e.stopPropagation()
  }
  console.log(imageUrl);
  return (
    <div className='modal-background' ref = {outSection} onClick={onClose}>
      {createPortal(
      <div onClick = {stophandler} className='portal-container'>
        <img className = "modal-img" src={imageUrl} alt = '모달이미지'/>
        <HiStar className='modal_star'/>
        <div className='modal_title'>{title}</div>
        <HiX className='closebtn' onClick={onClose}/>
      </div>,
      el
    )}
    </div>
  );
}


export default Modal;