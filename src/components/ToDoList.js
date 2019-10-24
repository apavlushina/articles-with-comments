// src/components/TodoList.js
import React from "react";

export default class TodoList extends React.Component {
  // the initial state
  state = {
    loading: true,
    data: [],
    error: null
  };

  // ...
  componentDidMount() {
    // (1) fetch some data (hopefully, something resembling a list of articles)
    // (2) put it in component local state (as per the shape discussed above)
    // (3) ...and if the loading fails, set an error state like discussed above
    fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10")
      .then(response => response.json())
      .then(result => {
        return (
          console.log("result", result),
          this.setState({
            data: (this.state.data = result),
            loading: false
          })
        );
      })
      .catch(e => {
        console.log(e);
        this.setState({
          loading: false,
          error: e
        });
      });
  }

  render() {
    // remember there are three different states the
    //  component can be in: loading the todos,
    //  successfully loaded, or errored
    console.log("this.state.data", this.state.data);
    if (this.state.loading) {
      return <div>Loading is in process ... </div>;
    } else if (this.state.error) {
      return <div>We can not load the data now, please, try later</div>;
    } else {
      return (
        <div>
          {this.state.data.map(data => {
            return <div>{data.title}</div>;
          })}
        </div>
      );
    }
  }
}
