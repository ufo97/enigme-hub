import React from 'react';

class SousComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <h1 id='question'>{this.props.text}</h1>;
    }
  }

export default SousComponent;