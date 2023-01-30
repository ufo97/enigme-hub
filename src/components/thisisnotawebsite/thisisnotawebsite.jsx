import React from 'react';
import '../../assets/css/enigme-hub.css';

import Logo from '../common/Logo.jsx';
import Enigme from './enigme';

const ThisIsNotAWebsite = () => {
    return (
        <div className="not-website">
            <Logo />
            <Enigme />
        </div>
    );
}

export default ThisIsNotAWebsite;