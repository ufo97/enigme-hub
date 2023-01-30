import React from 'react';

class Enigme extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        ...this.props
      }
    }
    render() {
      return (
        <p>THIS IS NOT A WEBSITE</p>
      );
    }
  }

export default Enigme;