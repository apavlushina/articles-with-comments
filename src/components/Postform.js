import React, { Component } from "react";

class PostForm extends Component {
  state = {
    author: "",
    text: ""
  };

  // Simple solution, make multiple handlers
  //   handleChangeAuthor = event => {
  //     this.setState({ author: event.target.value });
  //   };

  //   handleChangeText = event => {
  //     this.setState({ text: event.target.value });
  //   };

  // generalised handleChange,
  // you need add a "name" to each input for this to work
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log("SUBMITTING", this.state);
    this.props.addPost(this.state.author, this.state.text);
    this.setState({ author: "", text: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Author</label>
        <input
          name="author"
          value={this.state.author}
          onChange={this.handleChange}
        />
        <label>Text</label>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default PostForm;
