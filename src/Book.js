import React, { Component } from 'react';
import axios from 'axios';

class Book extends Component {
  deleteBook(id) {
    axios.delete(`http://localhost:8080/book/${id}`)
      .catch((err) => {
        console.error('error deleting book');
      });
  }
  render() {
    return (
      <div>
        <p onClick={() => this.deleteBook(this.props.id)}>X</p>
        <p>Title: {this.props.title}</p>
        <p>Author: {this.props.author}</p>
      </div>
    );
  }
}

export default Book;
