import React from 'react';
import '../../assets/css/enigme-hub.css';
import '../../assets/css/style.css';

import SousComponent from './SousComponent';
import Logo from '../common/Logo';
import Histoire from './Histoire';
import wording from '../../wording.json';

const Russie = () => {
  return (
    <div className="App">
      <div className='App-header'>
        <Logo />
        <SousComponent text="Какого цвета яблоко ?" />
        <Histoire image={wording.histoire1.image} text={wording.histoire1.text} />
      </div>
    </div>
  );
}

export default Russie;