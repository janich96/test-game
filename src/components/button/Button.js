import './button.css';
import React from 'react';
import { reel } from '../canvas/Canvas';

class Button extends React.Component {
  handleClick = () => {
          reel(10);
          reel(60);
          reel(110);
          reel(160);
          reel(210);
  }
  render() {
    return (
      <button className='btn' onClick={this.handleClick}>Start</button>
    );
  }
}

export default Button;
