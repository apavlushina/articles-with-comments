import React from "react";

export default class LikeCounter extends React.Component {
  state = {
    numLikes: true
  };

  increment = () => {
    this.setState({
      numLikes: this.state.numLikes + 1
    });
  };

  render() {
    return (
      <div>
        <p>
          This post has <b>{this.state.numLikes}</b> likes!
        </p>
        <button onClick={this.increment}>Like</button>
      </div>
    );
  }
}
