import React from 'react';
import '../../assets/css/style.css';
import '../../assets/css/Step2.css';

import Logo from '../common/Logo.jsx';
import Enigme from './enigme';
import Background from '../../assets/images/notawebsite/wallpaper.jpg';
import Heros from '../../assets/images/heros/hero_marche.png';

const ThisIsNotAWebsite = () => {
    return (
        <div className="not-website">
            <img src={Background} id="bg" />
            <Enigme />
            <img src={Heros} id="heros" />
        </div>
    );
}

export default ThisIsNotAWebsite;