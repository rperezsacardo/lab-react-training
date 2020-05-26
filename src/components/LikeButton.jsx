import React, { Component } from 'react';

class LikeButton extends Component {
  constructor() {
    super();
    this.possibleColors = [
      'purple',
      'blue',
      'green',
      'yellow',
      'orange',
      'red',
    ];
    this.state = {
      count: 0,
      i: 0,
    };
  }
  buttonClicked = () => {
    this.setState({
      count: this.state.count + 1,
      i: this.state.i === this.possibleColors.length ? 0 : this.state.i + 1,
      color: this.possibleColors[this.state.i],
    });
    console.log(this.state.color);
  };
  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button
          onClick={this.buttonClicked}
          style={{ backgroundColor: this.state.color }}
        >
          Liked
        </button>
      </div>
    );
  }
}
export default LikeButton;
