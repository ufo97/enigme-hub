import React from 'react';
import wording from '../../wording.json';
import Letter from './Letter';
import { useNavigate } from 'react-router-dom';

class Enigme extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        ...this.props,
        story: <div></div>
      }
    }

    handleClick(component) {

      this.setState(prevState => {
        return {
          ...prevState,
          story: component,
        }
      });
    }

    checkWordSubmitted() {
      if (document.getElementById("mystere").value.toLowerCase() === wording.histoire2.solution) {
        window.location.replace(wording.baseUrl + '/japon');
      }
      else {
        document.getElementById("bad-answer").textContent = 'Oups... mauvaise réponse';
      }
    }

    render() {
      const tmpString = wording.histoire2.title;
      const letters = tmpString.split('').map((e, i) =>
       <Letter 
        letter={e} 
        hiddenStory={wording.histoire2.stories[i - tmpString.substring(0, i).split(' ').length + 1]}
        handleClick={this.handleClick.bind(this)}
        />);
      return (
        <React.Fragment>
          <div>
            <label htmlFor="mystere"></label>
            <input id="mystere" type="text" />
            <br />
            <button onClick={this.checkWordSubmitted.bind(this)}>Valider le mot mystère</button>
            <p className='red' id={"bad-answer"}></p>
          </div>
          <p>{letters}</p>
          {this.state.story}
        </React.Fragment>
      );
    }
  }

export default Enigme;