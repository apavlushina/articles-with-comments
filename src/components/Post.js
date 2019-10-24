import React, { Component } from "react";
import Comment from "./Comment";

class Post extends Component {
  state = {
    comments: [
      { id: 1, commenter: "Wouter", content: "Cool story bro" },
      { id: 2, commenter: "David", content: "I see ... " }
    ]
  };

  handleDelete = () => {
    // console.log("DELETE POST"); just checking if listener and handler work
    this.props.deletePost(this.props.id); // where can find the id of this post?
  };

  render() {
    // console.log("PROPS IN POST:", this.props);
    return (
      <div>
        <h1>Post</h1>
        <h2>Author: {this.props.author}</h2>
        <p>{this.props.text}</p>
        <button onClick={this.handleDelete}>DELETE POST</button>
        <div>
          <h4>Comments</h4>
          {this.state.comments.map(comment => {
            return (
              <Comment
                key={comment.id}
                id={comment.id}
                commenter={comment.commenter}
                content={comment.content}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Post;
