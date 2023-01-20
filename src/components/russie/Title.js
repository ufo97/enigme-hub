import React from 'react';
import Letter from './Letter';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import wording from '../../wording.json';

class Title extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        redLetters: this.props.text.length -  this.props.text.split(' ').length,
        stateOfLetters: this.props.text.split('').map(element => 'red'),
      }
    }

    changeRedLettersValue(newValue, index) {
      let tmpStateOfLetters = [...this.state.stateOfLetters];
      tmpStateOfLetters[index] = newValue;
      this.setState({
          stateOfLetters: tmpStateOfLetters
        },
        function() {
          console.log('cc21', this.state.stateOfLetters, newValue, index);
          const concatenatedGreenLetters = this.props.text.split('').map((element, index) => this.state.stateOfLetters[index] == 'green' ? element : '').join('');

          console.log('cc', concatenatedGreenLetters);
    
          if (concatenatedGreenLetters == this.props.wordToGuess) {
            window.location.replace(wording.baseUrl + '/'); // CHANGER POUR METTRE LA PHASE 5
          }
        }
      );
    }

    render() {
      console.log(this.props.text);
      return this.props.text.split('').map((element, index) => <Letter letter={element} class={'red'} changeRedLettersValue={this.changeRedLettersValue.bind(this)} indexOfLetterInString={index} />);
    }
  }

export default Title;
