import React, { Component } from 'react';
import axios from 'axios';

class Book extends Component {
  constructor(props) {
    super(props);
    this.loadBooks = props.loadBooks;
  }
  deleteBook(id) {
    axios.delete(`http://localhost:8080/book/${id}`)
      .then(() => {
        this.loadBooks();
      })
      .catch((err) => {
        console.error('error deleting book', err);
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
