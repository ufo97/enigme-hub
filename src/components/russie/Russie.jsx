import React from 'react';
import '../../assets/css/style.css';
import '../../assets/css/Step4.css';

import SousComponent from './SousComponent';
import Histoire from './Histoire';
import wording from '../../wording.json';
import Background from '../../assets/images/russie/wallpaper_4.jpg';
import Heros from '../../assets/images/heros/hero_coucou.png';

const Russie = () => {
  return (
    <div className="App">
      <div className='App-header'>
        <img src={Background} id='bg' />
        <SousComponent text="Какого цвета яблоко ?" />
        <Histoire image={wording.histoire1.image} text={wording.histoire1.text} />
        <img src={Heros} id='heros'/>
      </div>
    </div>
  );
}

export default Russie;