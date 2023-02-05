import React from 'react';
import { useNavigate } from "react-router-dom";

import functions from "./functions";
import bambou1 from '../../assets/images/bambou1.png';
import '../../assets/css/style.css';
import '../../assets/css/Step3.css';

const japon = () => {
  const { validateB1, nav, unclicked, recColor } = functions();
    return (
    <>
    <div>
      <div>

      </div>
      <div id='imperial'>
        <div id='parchemin' className='imperial-colomn'>
          text lolilol
        </div>
        <div  className='imperial-colomn'>
          <div id='bamboo'>
            <button onClick={() => validateB1('test1', 0)} id="bamboo_01"><img id='test1' value={true} src={bambou1}/></button>
            <button onClick={() => validateB1('test2', 1)} id="bamboo_02"><img id='test2' value={true} src={bambou1}/></button>
            <button onClick={() => validateB1('test3', 2)} id="bamboo_03"><img id='test3' value={true} src={bambou1}/></button>
            <button onClick={() => validateB1('test4', 3)} id="bamboo_04"><img id='test4' value={true} src={bambou1}/></button>
            <button onClick={() => validateB1('test5', 4)} id="bamboo_05"><img id='test5' value={true} src={bambou1}/></button>
            <button onClick={() => validateB1('test6', 5)} id="bamboo_06"><img id='test6' value={true} src={bambou1}/></button>
          </div>
          <button onMouseOver={unclicked} onMouseLeave={recColor} onClick={nav} className='button' id='button'>Validation</button> 
        </div>
      </div>
    </div>
    </>
    )
  };
  
  export default japon;
  