import React, { Component } from 'react';

const CarouselImgs = (props) => {
  console.log(props);
};

class Carousel extends Component {
  constructor(props) {
    super();
    this.imgs = props.imgs;
    this.state = {
      i: 0,
      // img: this.imgs[0],
    };
  }
  NextImg = () => {
    this.setState({
      i:
        this.state.i === this.imgs.length
          ? (this.state.i = 0)
          : this.state.i + 1,
      img: this.imgs[this.state.i],
    });
    console.log(this.state.i);
  };

  BeforeImg = () => {
    this.setState({
      i:
        this.state.i === 0
          ? (this.state.i = this.imgs.length)
          : this.state.i - 1,
      img: this.imgs[this.state.i],
    });
    console.log(this.state.i);
  };

  render() {
    console.log(this.img);
    return (
      <div>
        <button onClick={this.BeforeImg}>Before</button>
        <button onClick={this.NextImg}>Next</button>
        <img src={this.state.img} alt="profile img" />
      </div>
    );
  }
}

export default Carousel;
