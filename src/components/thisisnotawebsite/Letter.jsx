import React from 'react';

class Letter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        ...this.props,
        isSpace: this.props.letter === ' ',
        isStoryHidden: true
      }
    }

    handleClick() {
      const hiddenStory = this.state.hiddenStory !== 'VIDEO' ?
        <p className='story' hidden={!this.state.isStoryHidden}>{this.state.hiddenStory}</p> : 
        <video src={require('../../assets/videos/Enigme.mp4')} width="600" height="300" controls="controls" autoPlay={true} />;

      if (!this.state.isSpace) {
        this.setState(prevState =>{
          return{
              ...prevState,
              isStoryHidden : !prevState.isStoryHidden
          }
         })
      }

      this.props.handleClick(hiddenStory);
    }

    render() {
      return (
        <button onClick={this.handleClick.bind(this)} className='letter-button red'>
          {this.state.isSpace &&
            <span>
              &nbsp;
            </span>
          }
          {!this.state.isSpace &&
            <span>
              {this.state.letter}
            </span>
          }
        </button>);
    }
  }

export default Letter;