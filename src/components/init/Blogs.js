import React from 'react';
import useModal from "./useModal";
import Modal from "./modal";

import Logo from '../common/Logo';
import '../../assets/css/Step1.css';

const Blogs = () => {
  const { isShowing, toggle } = useModal();
    return (
    <>
    <div id='container'>
      <Logo />
      <h1>Vous êtes en SAGI?</h1>
      <p>Enigme Hub est un site réalisé par des étudiants de SAGI comme projet HTML 5.</p>
      
      <button className='rules-button' onClick={toggle}>Je suis en SAGI - Entrer</button> 
      <Modal isShowing={isShowing} hide={toggle} />
    
      
    </div>
    </>
    )
  };
  
  export default Blogs;
  