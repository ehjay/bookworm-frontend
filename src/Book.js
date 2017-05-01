import React, { Component } from 'react';

class Book extends Component {
  render() {
    return (
      <div>
        <p>Title: {this.props.title}</p>
        <p>Author: {this.props.author}</p>
      </div>
    );
  }
}

export default Book;
