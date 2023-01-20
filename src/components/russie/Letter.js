import React from 'react';

class Letter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        ...this.props
      }
    }

    handleClick() {
      const newValue = this.state.class == 'red' ? 'green' : 'red';
      this.setState({
        'class' : newValue
      });
      this.props.changeRedLettersValue(newValue, this.props.indexOfLetterInString);
    }

    render() {
      const classes = 'letter '.concat(this.state.class);
      const isSpace = this.state.letter === ' ';
      return (
        <button onClick={this.handleClick.bind(this)} className='letter-button'>
          {isSpace &&
            <span className={classes}>
              &nbsp;
            </span>
          }
          {!isSpace &&
            <span className={classes}>
              {this.state.letter}
            </span>
          }
        </button>);
    }
  }

export default Letter;