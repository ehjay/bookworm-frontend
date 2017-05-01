import React, { Component } from 'react';
import Book from './Book';

class Catalogue extends Component {
  render() {
    return (
      <ul>
        {this.props.books.map((book) => {
          return <li key={book.id}>
            <Book author={book.author} title={book.title} />
          </li>;
        })}
      </ul>
    );
  }
}

export default Catalogue;
