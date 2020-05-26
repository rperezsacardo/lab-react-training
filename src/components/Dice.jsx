import React, { Component } from 'react';

class Dice extends Component {
  constructor() {
    super();
    this.empty = '/img/dice-empty.png';
    this.state = {
      diceSides: '', // Maybe rename the empty file to zero ??
      diceImg: this.empty,
    };
  }
  rollDice = () => {
    console.log('dice');
    this.setState({
      diceImg: this.empty,
    });
    setTimeout(() => {
      console.log('dice rolled');
      this.setState({
        diceSides: Math.ceil(Math.random() * 6),
        diceImg: `/img/dice${this.state.diceSides}.png`,
      });
      console.log(this.state.diceImg);
      console.log(this.state.diceSides);
    }, 1000);
  };

  render() {
    return (
      <div>
        <button onClick={this.rollDice}>Dice</button>
        <img src={this.state.diceImg} alt="" />
      </div>
    );
  }
}

export default Dice;
