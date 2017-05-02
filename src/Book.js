import React, { Component } from 'react';
import axios from 'axios';
import './Book.css';

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
      <div className='row book'>
        <div className='col-sm-4'>
          <strong>{this.props.title}</strong>
        </div>
        <div className='col-sm-2'>
          by
        </div>
        <div className='col-sm-4'>
          <strong>{this.props.author}</strong>
        </div>
        <div className='col-sm-2'>
          <i
            className='fa fa-times'
            onClick={() => this.deleteBook(this.props.id)}
          ></i>
        </div>
        <div className='col-sm-2'>
        </div>
      </div>
    );
  }
}

export default Book;
