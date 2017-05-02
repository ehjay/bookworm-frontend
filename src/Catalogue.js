import React, { Component } from 'react';
import Book from './Book';
import './Catalogue.css';

class Catalogue extends Component {
  render() {
    return (
      <ul className='catalogue-list'>
        {this.props.books.map((book) => {
          return <li key={book.id}>
            <Book id={book.id} author={book.author} title={book.title} loadBooks={this.props.loadBooks} />
          </li>;
        })}
      </ul>
    );
  }
}

export default Catalogue;
