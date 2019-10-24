// src/components/ArticleCard.js
import React from "react";

export default class ArticleCard extends React.Component {
  render() {
    return (
      <div className="article card">
        <div className="row">
          <div className="col half">
            <img src={this.props.imageUrl} />
          </div>
          <div className="col half">
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
