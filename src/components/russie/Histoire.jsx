import React from 'react';
import Title from './Title';
import wording from '../../wording.json';

class Histoire extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <React.Fragment >
                <div className={`russie-background`}>
                  <div>
                    <Title text={wording.histoire1.text} wordToGuess={wording.histoire1.wordToGuess} />
                  </div>
                </div>
             </React.Fragment>;
    }
  }

export default Histoire;