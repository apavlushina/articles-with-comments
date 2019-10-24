import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <div>
        <h3>Commenter: {this.props.commenter}</h3>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Comment;
