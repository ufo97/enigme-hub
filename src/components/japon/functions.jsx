import { useState } from "react";
import wording from '../../wording.json';

const functions = () => {

  function validateB1(id, num){
    var but = document.getElementById(id);

    but.value===true?but.src=require('../../assets/images/bambou1.png'):but.src=require('../../assets/images/bambou2.png')
    but.value = !but.value
  }

  const nav = () => {
    window.location.replace(wording.baseUrl + '/');
  };

  const unclicked = () => {
    var b1 = document.getElementById('test1').value
    var b2 = document.getElementById('test2').value
    var b3 = document.getElementById('test3').value
    var b4 = document.getElementById('test4').value
    var b5 = document.getElementById('test5').value
    var b6 = document.getElementById('test6').value
    
    const button = document.getElementById('button'); 
    if((b2 && b5 && b6) == true && (b1 && b3 && b4) != true) {
      button.style.backgroundColor = 'green';
      button.onclick=nav;
    }
    else {   
      button.style.transform = button.style.transform == 'translate('+0+'px)' ? 'translate('+250+'px)' : 'translate('+0+'px)';
    }
  }

  function recColor(){
    const button = document.getElementById('button'); 
    button.style.backgroundColor = '#f4511e'
  }
  return {
    validateB1,
    nav,
    unclicked,
    recColor
  };
};

export default functions;