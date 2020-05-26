import React, { Component } from 'react';

class ClickablePicture extends Component {
  constructor() {
    super();
    this.state = {
      toggleButton: false,
    };
  }

  togglePicture = () => {
    this.setState({
      toggleButton: !this.state.toggleButton,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.togglePicture}>
          <img
            src={
              (this.state.toggleButton && '/img/persons/maxence-glasses.png') ||
              '/img/persons/maxence.png'
            }
            alt=""
          />
        </button>
      </div>
    );
  }
}

export default ClickablePicture;
