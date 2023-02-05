import React from 'react';
import '../../assets/css/enigme-hub.css';
import '../../assets/css/style.css';
import '../../assets/css/Step5.css';

import ImgParcheminCache from '../../assets/images/amerindien/parchemin_cache.png';
import ImgParchemin from '../../assets/images/amerindien/parchemin.png';

class Parchemin extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isParcheminShown: false
      }
    }

    handleClick() {
        console.log("BONJOUR");
        this.setState(prevState => ({
            isParcheminShown: !prevState.isParcheminShown
          }));
    }

    render() {
      return (
        <button onClick={this.handleClick.bind(this)} id={"parchemin-btn"}>
          {this.state.isParcheminShown && 
              <img src={ImgParchemin} id={"parchemin-shown"} />
          }
          {!this.state.isParcheminShown && 
              <img src={ImgParcheminCache} id={"parchemin-hidden"} />
          }
        </button>
      );

    }
  }

export default Parchemin;