import React, { Component } from 'react';

const style = {
  fontSize  : '1.2em',
  lineHeight: '2em',
  padding   : '1em'
};

class About extends Component {
  render() {
    return (
      <div style={style}>
        <h1>About</h1>
        <p>Really basic UI scaffold.</p>
      </div>
    );
  }
}

export default About;