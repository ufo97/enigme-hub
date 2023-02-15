import React from 'react';
import Letter from './Letter';
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
          const concatenatedGreenLetters = this.props.text.split('').map((element, index) => this.state.stateOfLetters[index] == 'green' ? element : '').join('');
    
          if (concatenatedGreenLetters == this.props.wordToGuess) {
            window.location.replace(wording.baseUrl + '/amerindien');
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
